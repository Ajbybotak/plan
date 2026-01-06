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
        "poniedziałek": ["Matematyka","Polski","Historia","Biologia","Chemia","Fizyka","Informatyka","WF"],
        "wtorek": ["Polski","Biologia","Geografia","Chemia","Matematyka","Fizyka","Informatyka","Historia"],
        "środa": ["Matematyka","Fizyka","WF","Informatyka","Biologia","Chemia","Polski","Historia"],
        "czwartek": ["Geografia","Matematyka","Angielski","WOS","Chemia","Biologia","Informatyka","Historia"],
        "piątek": ["Matematyka","Historia","Informatyka","Polski","Biologia","Fizyka","Geografia","WOS"]
    },
    "2A": {
        "poniedziałek": ["Polski","Matematyka","Geografia","Biologia","Chemia","WF","Informatyka","Historia"],
        "wtorek": ["Historia","Matematyka","Angielski","Biologia","Chemia","Fizyka","Geografia","WF"],
        "środa": ["Matematyka","Informatyka","Angielski","WOS","Geografia","Chemia","Biologia","Fizyka"],
        "czwartek": ["Polski","WOS","Historia","Matematyka","Chemia","Geografia","Biologia","Informatyka"],
        "piątek": ["Polski","Matematyka","WF","Historia","Geografia","Biologia","Chemia","Fizyka"]
    }
    // ← resztę klas możesz dopisać tak samo
};

// ===== SELECTY KLAS =====
const classSelects = document.querySelectorAll(".class-select");

classSelects.forEach(select => {
    classes.forEach(cls => {
        const option = document.createElement("option");
        option.value = cls;
        option.textContent = cls;
        select.appendChild(option);
    });

    const index = select.dataset.index;

    const saved = localStorage.getItem("selectedClass" + index);
    if (saved) select.value = saved;

    select.addEventListener("change", () => {
        localStorage.setItem("selectedClass" + index, select.value);
        getNextLesson();
    });
});

// ===== GODZINA I DZIEŃ =====
document.getElementById("time").addEventListener("input", getNextLesson);
document.getElementById("day").addEventListener("change", getNextLesson);

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

    // Jeżeli godzina jest przed pierwszą lekcją
    if (index === -1) {
        classSelects.forEach(select => {
            const cls = select.value;
            const out = document.getElementById("output-" + select.dataset.index);

            if (!timetable[cls]) {
                out.textContent = "Brak lekcji";
                return;
            }

            // Pierwsza lekcja
            const firstLesson = timetable[cls][day][0];
            out.textContent = `undefined -> ${firstLesson}`;
        });
        return;
    }

    // Jeśli lekcje są już po godzinie
    classSelects.forEach(select => {
        const cls = select.value;
        const out = document.getElementById("output-" + select.dataset.index);

        if (!timetable[cls] || index < 1) {
            out.textContent = "Brak lekcji";
            return;
        }

        const prev = timetable[cls][day][index - 1];
        const next = timetable[cls][day][index];

        out.textContent = `${prev} → ${next}`;
    });
}


// ===== URUCHOM NA START =====
getNextLesson();
