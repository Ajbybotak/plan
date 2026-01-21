// ===== LISTA KLAS =====
const classes = [
    "BRAK", "1A","1B", "1C", "1D", "1E", "1G", "2A", "2B", "2C", "2D", "2G"
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

    "BRAK": {
        "poniedziałek": ["", "", "", "", "", "", "", ""],
        "wtorek": ["", "", "", "", "", "", "", ""],
        "środa": ["", "", "", "", "", "", "", ""],
        "czwartek": ["", "", "", "", "", "", "", ""],
        "piątek": ["", "", "", "", "", "", "", ""]
    },

    "1A": {
        "poniedziałek": ["BRAK", "BRAK", "REL (studio)", "BIOL 312", "FIZ 109B/ANG 204", "ANG 108/FIZ 109B", "POL 101", "BRAK"],
        "wtorek": ["BRAK/ANG 204", "HIS 306", "MAT 110", "ANG 108/INF 203", "WF", "NIEM 205/FRAN 303/HISZ (bibl)/HISZ 110", "FIL 310", "BRAK"],
        "środa": ["INF 103/ANG 204", "EDB 105/INF 203", "MAT 110", "ANG 105/EDB 204", "GEO 104", "FIZ 304", "NIEM 205/FRAN 303/HISZ (bibl)/HISZ 110", "GW"],
        "czwartek": ["BRAK", "WF", "WF", "MAT 110", "MAT 110", "POL 101", "POL 101", "BRAK"],
        "piątek": ["BRAK", "MAT 110", "MAT 110", "HIS 306", "POL 101", "CHE 107", "INF 203/BRAK", "BRAK", "BRAK"]
    },

    "1B": {
        "poniedziałek": ["BRAK", "REL (studio)", "EDB 208", "MAT 301", "GW 109A", "ANG 404/ANG 204", "HIS 306", "BRAK"],
        "wtorek": ["MAT 301", "ANG 404/ANG 204", "POL 102", "FIL 309", "WF", "NIEM 205/FRAN 303/HISZ (bibl)/HISZ 110", "INF 103/BRAK", "BRAK"],
        "środa": ["BRAK", "BRAK", "FIZ 109A/ANG 204", "ANG 404/CHEM 207", "CHEM 207/FIZ 109A", "MAT 301", "NIEM 205/FRAN 303/HISZ (bibl)/HISZ 110", "BRAK"],
        "czwartek": ["BRAK", "WF", "WF", "MAT 301", "GEO 104", "POL 102", "POL 102", "HIS 306"],
        "piątek": ["BIOL 6", "POL 102", "ANG 404/ANG 204", "MAT 301", "MAT 301", "FIZ 109A", "BRAK/INF 103", "BRAK"]
    },

    "1C": {
        "poniedziałek": ["BRAK", "EDB 102/BIOL 311", "BIOL 311/ANG 302", "CHEM 209/EDB 310", "ANG 106/CHEM 207", "MAT 209", "WF", "WF"],
        "wtorek": ["ANG 102/BRAK", "ŁAC 309", "MAT 209", "MAT 209", "FRAN 303/FRAN 401/HISZ (bibl)/NIEM 206", "REL (studio)", "BRAK", "BRAK"],
        "środa": ["BRAK/INF 203", "MAT 209", "HIS 101", "BIOL 311", "POL 101", "POL 101", "BRAK/ANG 104", "BRAK"],
        "czwartek": ["BRAK", "POL  101", "HIS 401", "CHEM 207", "FRAN 303/FRAN 401/HISZ (bibl)/NIEM 206", "INF 103/ANG 302", "ANG 402/BRAK", "BRAK"],
        "piątek": ["BRAK", "FIZ 109A", "POL 101", "WF", "GEO 104", "MAT 209", "MAT 209", "GW 209", "BRAK"]
    },

    "1D": {
        "poniedziałek": ["REL (studio)", "MAT 304", "HIS 307", "GEO 107", "POL 6", "POL 6", "WF", "WF"],
        "wtorek": ["ANG 404/BIOL 312", "BIOL 312/ANG 106", "ŁAC 309", "MAT 304", "FRAN 303/FRAN 401/HISZ (bibl)/NIEM 206", "BRAK/FIZ 310", "BRAK", "BRAK"],
        "środa": ["POL 106", "POL 109B", "GW 312", "MAT 304", "EDB 109B", "BRAK", "BRAK", "BRAK"],
        "czwartek": ["MAT 304", "CHEM 208", "ANG 404/INF 103", "INF 103/ANG 312", "FRAN 303/FRAN 401/HISZ (bibl)/NIEM 206", "BIOL 312", "BRAK", "BRAK"],
        "piątek": ["MAT 304", "MAT 304", "WF", "CHEM 208/ANG 309", "HIS 307", "ANG 404/CHEM 208", "FIZ 109A/BRAK", "BRAK"]
    },

    "1E": {
        "poniedziałek": ["EDB 102", "MAT 205", "HIS 306", "ANG 402/ANG 311", "POL 107", "NIEM 206/FRAN 401/FRAN 303/NIEM 309", "REL (studio)", "BRAK"],
        "wtorek": ["BRAK", "POL 107", "POL 107", "HIS 402", "FIZ 109A", "FIL 309", "BRAK", "BRAK"],
        "środa": ["GEO 104", "MAT 205", "POL 107", "WF", "CHEM 208", "INF 103/ANG 303", "ANG 108/INF 103", "BRAK"],
        "czwartek": ["BRAK", "BRAK", "HIST 402", "ANG 311/ANG (bibl)", "POL 107", "NIEM 206/FRAN 401/FRAN 303/NIEM 309", "WF", "WF"],
        "piątek": ["BRAK", "POL 107", "MAT 205", "GW 402", "BIOL 6", "WOS 307", "BRAK", "BRAK"]
    },

    "1G": {
        "poniedziałek": ["MAT 209", "GEO 306", "POL 109B", "HIS 306", "ANG 402/INF 103", "NIEM 206/FRAN 401/FRAN 303/NIEM 309", "BRAK", "BRAK"],
        "wtorek": ["POL 307", "CHEM 207", "FIZ 109B/ANG 106", "ANG 107/FIZ 109B", "FIL 309", "MAT 209", "BRAK", "BRAK"],
        "środa": ["REL (studio)", "GW 108", "GEO 104", "WF", "BIOL 311", "ANG 106/EDB 109B", "EDB 109B/ANG 106", "BRAK"],
        "czwartek": ["BRAK", "MAT 209", "ANG 102/ANG 106", "GEO 304", "HIS 306", "NIEM 206/FRAN 401/FRAN 303/NIEM 309", "WF", "WF"],
        "piątek": ["MAT 209", "MAT 209", "GEO 109B", "POL 312", "POL 312", "INF 103/ANG 106", "BRAK", "BRAK"]
    },

    "2B": {
        "poniedziałek": ["POL 107", "GW 301", "GEO 104", "WF", "MAT 301", "MAT 301", "ANG 404/ANG 402", "ANG 404/BRAK"],
        "wtorek": ["BIOL 6/FIZ 109A", "GEO 104", "CHEM 208/BIOL 6", "FIZ 109A/CHEM 208", "HIS 307", "POL 107", "MAT 301", "NIEM 206/NIEM 309/FRAN 303/HISZ (bibl)/HISZ 110"],
        "środa": ["WF", "WF", "BIOL 404", "INF 103/ANG 106", "NIEM 206/NIEM 309/FRAN 303/HISZ (bibl)/HISZ 110", "BIZ 109A", "POL 107", "BRAK"],
        "czwartek": ["MAT 301", "MAT 301", "FIZ 109A", "BIZ 106", "CHEM 208", "POL 107", "ANG 404/ANG 6", "BRAK/INF 103"],
        "piątek": ["BRAK", "MAT 301", "FIZ 109A", "HIS 307", "EO 306", "EO 306", "ANG 404/ANG 106", "REL 206"]
    },

    "2D": {
        "poniedziałek": ["BIOL 311", "GEO 104", "MAT 310", "NIEM 206/FRAN 401/HISZ (bibl)", "WF", "POL 102", "POL 102", "REL (studio)"],
        "wtorek": ["CHEM 207/INF 103", "FIZ 109B", "MAT 310", "NIEM 206/FRAN 401/HISZP (bibl)", "BIOL 311/CHEM 208", "ANG 302/BIOL 311", "GEO 104", "INF 103/ANG 204"],
        "środa": ["POL 102", "MAT 310", "MAT 310", "BIZ 109A", "ANG 302/ANG 106", "HIS 402", "EO 306", "EO 306"],
        "czwartek": ["BIZ 106", "CHEM 207", "CHEM 207", "WF", "WF", "BIOL 311", "BRAK", "BRAK"],
        "piątek": ["POL 102", "MAT 310", "BIOL 311/CHEM 108", "GW 310", "HIS 402", "ANG 302/ANG 106", "CHEM 204/BIOL 311", "BRAK"]
    },

    "2G": {
        "poniedziałek": ["HIS 402", "ANG 108/ANG 302", "GEO 107", "FRAN 303/NIEM 309", "POL 101", "POL 101", "MAT 205", "BRAK"],
        "wtorek": ["GEO 310", "GW 302", "HIS 402", "MAT 205", "MAT 205", "CHEM 307/FIZ 109B", "FIZ 109B/CHEM 207", "REL (studio)"],
        "środa": ["MAT 205", "POL 101", "BIZ 402", "GEO 104", "ANG 108/INF 103", "BIOL 311", "WF", "WF"],
        "czwartek": ["GEO 104", "MAT 205", "MAT 205", "ANG 108/ANG 302", "INF 103/ANG 302", "BIZ 106", "FRAN 303/NIEM 309", "POL 101"],
        "piątek": ["BRAK", "CHEM 104", "BIOL 312/ANG 302", "WF", "ANG 108/BIOL 311", "EO 402", "EO 402", "BRAK"]
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
