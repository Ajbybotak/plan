// ===== LISTA KLAS =====
const classes = [
    "1A","1B","1C","1D","1E",
    "2A","2B","2C","2D","2E",
    "3A","3B","3C","3D","3E",
    "4A","4B","4C","4D","4E"
];

// ===== PLAN LEKCJI (SKRÓCONY PRZYKŁAD) =====
const timetable = {
    "1A": {
        "poniedziałek": ["Matematyka", "Polski", "Historia", "Biologia", "Chemia", "Fizyka", "Informatyka", "WF"],
        "wtorek": ["Polski", "Biologia", "Geografia", "Chemia", "Matematyka", "Fizyka", "Informatyka", "Historia"],
        "środa": ["Matematyka", "Fizyka", "WF", "Informatyka", "Biologia", "Chemia", "Polski", "Historia"],
        "czwartek": ["Geografia", "Matematyka", "Angielski", "WOS", "Chemia", "Biologia", "Informatyka", "Historia"],
        "piątek": ["Matematyka", "Historia", "Informatyka", "Polski", "Biologia", "Fizyka", "Geografia", "WOS"]
    },
    "2A": {
        "poniedziałek": ["Polski", "Matematyka", "Geografia", "Biologia", "Chemia", "WF", "Informatyka", "Historia"],
        "wtorek": ["Historia", "Matematyka", "Angielski", "Biologia", "Chemia", "Fizyka", "Geografia", "WF"],
        "środa": ["Matematyka", "Informatyka", "Angielski", "WOS", "Geografia", "Chemia", "Biologia", "Fizyka"],
        "czwartek": ["Polski", "WOS", "Historia", "Matematyka", "Chemia", "Geografia", "Biologia", "Informatyka"],
        "piątek": ["Polski", "Matematyka", "WF", "Historia", "Geografia", "Biologia", "Chemia", "Fizyka"]
    }
    // Możesz dodać więcej klas w podobny sposób...
};

// ===== SELECTY KLAS =====
const classSelects = document.querySelectorAll(".class-select");

classSelects.forEach(select => {
    // Wypełnienie opcji klas
    classes.forEach(cls => {
        const option = document.createElement("option");
        option.value = cls;
        option.textContent = cls;
        select.appendChild(option);
    });

    const index = select.dataset.index;

    // Wczytanie zapisanej klasy z localStorage
    const saved = localStorage.getItem("selectedClass" + index);
    if (saved) select.value = saved;

    // Zapis do localStorage po zmianie klasy
    select.addEventListener("change", () => {
        localStorage.setItem("selectedClass" + index, select.value);
        getNextLesson();
    });
});

// ===== AUTOMATYCZNE USTAWIENIE GODZINY I DNIA =====
function setDefaultDateTime() {
    const today = new Date();
    
    // Ustawienie dnia tygodnia
    const daysOfWeek = ["poniedziałek", "wtorek", "środa", "czwartek", "piątek"];
    const dayOfWeek = today.getDay(); // 0 - Niedziela, 1 - Poniedziałek itd.
    
    const currentDay = daysOfWeek[dayOfWeek - 1] || "poniedziałek"; // W przypadku niedzieli domyślnie poniedziałek

    document.getElementById("day").value = currentDay;

    // Ustawienie godziny na aktualną
    const hours = today.getHours().toString().padStart(2, "0");
    const minutes = today.getMinutes().toString().padStart(2, "0");
    document.getElementById("time").value = `${hours}:${minutes}`;

    // Od razu wywołanie funkcji, żeby zaktualizować lekcje
    getNextLesson();
}

// ===== GŁÓWNA FUNKCJA =====
function getNextLesson() {
    const time = document.getElementById("time").value;
    const day = document.getElementById("day").value;

    if (!time) return;

    const lessonTimes = [
        "00:00", "08:05", "09:00", "09:55",
        "11:00", "11:55", "12:50",
        "13:45", "14:50", "23:59"
    ];

    const [h, m] = time.split(":").map(Number);
    const now = h * 60 + m;

    let index = -1;
    for (let i = 0; i < lessonTimes.length; i++) {
        const [lh, lm] = lessonTimes[i].split(":").map(Number);
        if (lh * 60 + lm > now) {
            index = i - 1;
            break;
        }
    }

    classSelects.forEach(select => {
        const cls = select.value;
        const out = document.getElementById("output-" + select.dataset.index);

        // Przed pierwszą lekcją
        if (index === -1) {
            const firstLesson = timetable[cls][day][0];
            out.textContent = `undefined -> ${firstLesson}`;
            return;
        }

        // Po ostatniej lekcji
        if (index >= lessonTimes.length - 2) {
            const lastLesson = timetable[cls][day][timetable[cls][day].length - 1];
            out.textContent = `${lastLesson} -> undefined`;
            return;
        }

        // W trakcie lekcji
        const prev = timetable[cls][day][index - 1];
        const next = timetable[cls][day][index];
        out.textContent = `${prev} → ${next}`;
    });
}

// ===== URUCHOM NA START =====
setDefaultDateTime();
