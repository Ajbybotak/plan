// ===== LISTA KLAS =====
const classes = [
    "1A","2A","2C"
];

// ===== PLAN LEKCJI (SKRÓCONY PRZYKŁAD) =====
const timetable = {
    "2A": {
        "poniedziałek": ["POL 101", "CHEM 402", "BIOL 6", "WF", "ANG 404/INF 203", "MAT 304", "FIZ 203", "INF 203 / BRAK"],
        "wtorek": ["HIS 306", "GEO 310", "ANG 404/ANG 204", "POL 102", "INF 203/BIOL 6", "BIOL 6/CHEM 208", "CHEM 208/INF 203", "NIEM 206/NIEM 309/FRAN 303/HISZ (bibl)/HISZ 110"],
        "środa": ["WF", "WF", "MAT 304", "FIZ 109B", "NIEM 206/NIEM 309/FRAN 303/HISZ (bibl)/HISZ 110", "HIS 306", "GW 304", "BIZ 6"],
        "czwartek": ["ANG 404/FIZ 206", "MAT 304", "MAT 304", "FIZ 104/ANG 204", "BIZ 106", "POL 104", "EO 307", "EO 307"],
        "piątek": ["BRAK/INF 203", "POL 311", "MAT 304", "INF 203/ANG 204", "GEO 104", "REL 206", "BRAK", "BRAK"]
    },
    "2C": {
        "poniedziałek": ["GEO 104", "MAT 110", "MAT 110", "NIEM 206/FRAN 401/HISZ (bibl)", "WF", "INF 103/ANG 105", "WG 208", "BRAK/INF 103"],
        "wtorek": ["CHEM 208", "CHEM 208", "GEO 104", "NIEM 206/FRAN 401/HISZ (bibl)", "ANG 302/BIOL 312", "BIOL 312/ANG 106", "POL 107", "FIZ 109B"],
        "środa": ["BIOL 312", "HIS 402", "ANG 302/CHEM 208", "CHEM 208/ANG 306", "POL 107", "MAT 110", "BIZ 101", "REL 301"],
        "czwartek": ["MAT 110", "BIZ 106", "BIOL 312", "WF", "WF", "EO 306", "EO 306", "BRAK"],
        "piątek": ["BIOL 312/BRAK", "CHEM 208/BIOL 312", "HIS 402", "MAT 110", "ANG 302/CHEM 208", "POL 107", "POL 107", "BRAK"]
    },
    "1A": {
        "poniedziałek": ["", "", "", "", "", "", "", ""],
        "wtorek": ["", "", "", "", "", "", "", ""],
        "środa": ["", "", "", "", "", "", "", ""],
        "czwartek": ["", "", "", "", "", "", "", ""],
        "piątek": ["", "", "", "", "", "", "", ""]
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
            out.textContent = `${firstLesson}`;
            return;
        }

        // Po ostatniej lekcji
        if (index >= lessonTimes.length - 2) {
            const lastLesson = timetable[cls][day][timetable[cls][day].length - 1];
            out.textContent = `${lastLesson}`;
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

// Rejestracja Service Workera
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/plan/service-worker.js')
            .then((registration) => {
                console.log('Service Worker zarejestrowany:', registration);

                // Sprawdzenie, czy jest nowa wersja Service Workera
                registration.addEventListener('updatefound', () => {
                    const newSW = registration.installing;
                    newSW.addEventListener('statechange', () => {
                        if (newSW.state === 'installed' && navigator.serviceWorker.controller) {
                            // Jeśli jest nowa wersja, wyświetl komunikat
                            alert('Nowa wersja aplikacji jest dostępna! Aplikacja zostanie zaktualizowana.');
                            // Wymuś aktualizację cache
                            newSW.postMessage({ action: 'skipWaiting' });
                        }
                    });
                });
            })
            .catch((error) => {
                console.log('Błąd przy rejestracji Service Workera:', error);
            });
    });
}
