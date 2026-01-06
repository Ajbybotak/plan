// Przykładowy plan lekcji dla klas na różne dni tygodnia
const timetable = {
    "1A": {
        "poniedziałek": [
            "Matematyka", "Język polski", "Historia", "Biologia", "Chemia", "Fizyka", "Informatyka", "W-F"
        ],
        "wtorek": [
            "Język polski", "Biologia", "Geografia", "Chemia", "Matematyka", "Fizyka", "Informatyka", "Historia"
        ],
        "środa": [
            "Matematyka", "Fizyka", "W-F", "Informatyka", "Biologia", "Chemia", "Język polski", "Historia"
        ],
        "czwartek": [
            "Geografia", "Matematyka", "Język angielski", "WOS", "Chemia", "Biologia", "Informatyka", "Historia"
        ],
        "piątek": [
            "Matematyka", "Historia", "Informatyka", "Język polski", "Biologia", "Fizyka", "Geografia", "WOS"
        ]
    },
    "1B": {
        "poniedziałek": [
            "Angielski", "Matematyka", "Geografia", "WOS", "Język polski", "Chemia", "Historia", "Biologia"
        ],
        "wtorek": [
            "Matematyka", "Język polski", "Biologia", "Chemia", "W-F", "Informatyka", "Geografia", "Historia"
        ],
        "środa": [
            "WOS", "Matematyka", "Angielski", "Geografia", "Biologia", "Chemia", "Fizyka", "W-F"
        ],
        "czwartek": [
            "Język polski", "Informatyka", "WOS", "Biologia", "Chemia", "Matematyka", "Historia", "Fizyka"
        ],
        "piątek": [
            "Matematyka", "Geografia", "Język polski", "Fizyka", "Biologia", "Chemia", "W-F", "Informatyka"
        ]
    },
    // Dodaj kolejne klasy w podobny sposób...
    "2A": {
        "poniedziałek": [
            "Język polski", "Matematyka", "Geografia", "Biologia", "Chemia", "W-F", "Informatyka", "Historia"
        ],
        "wtorek": [
            "Historia", "Matematyka", "Angielski", "Biologia", "Chemia", "Fizyka", "Geografia", "W-F"
        ],
        "środa": [
            "Matematyka", "Informatyka", "Język angielski", "WOS", "Geografia", "Chemia", "Biologia", "Fizyka"
        ],
        "czwartek": [
            "Język polski", "WOS", "Historia", "Matematyka", "Chemia", "Geografia", "Biologia", "Informatyka"
        ],
        "piątek": [
            "Język polski", "Matematyka", "W-F", "Historia", "Geografia", "Biologia", "Chemia", "Fizyka"
        ]
    },
    // Dodaj pozostałe klasy w podobny sposób, zmieniając nazwy klas i plan lekcji...
    "4E": {
        "poniedziałek": [
            "W-F", "Matematyka", "Język polski", "Informatyka", "Biologia", "Fizyka", "Chemia", "WOS"
        ],
        "wtorek": [
            "Historia", "Matematyka", "W-F", "Informatyka", "Język angielski", "Biologia", "Chemia", "Fizyka"
        ],
        "środa": [
            "Matematyka", "WOS", "Język polski", "Biologia", "Fizyka", "Chemia", "Informatyka", "Geografia"
        ],
        "czwartek": [
            "Matematyka", "Geografia", "Informatyka", "WOS", "Fizyka", "Historia", "Biologia", "Chemia"
        ],
        "piątek": [
            "Język polski", "W-F", "Matematyka", "Chemia", "Biologia", "Informatyka", "Fizyka", "Historia"
        ]
    }
};

// Funkcja do obliczenia następnej lekcji po przerwie
function getNextLesson() {
    const selectedClass = document.getElementById("class").value;
    const selectedTime = document.getElementById("time").value;
    const selectedDay = document.getElementById("day").value;

    const lessonTimes = [
        "00:00", "08:05", "09:00", "09:55", "11:00", "11:55", "12:50", "13:45", "14:50", "23:59"
    ];

    // Zamiana godziny na minutową wartość
    const [hours, minutes] = selectedTime.split(":").map(Number);
    const timeInMinutes = hours * 60 + minutes;

    // Znalezienie indeksu lekcji, która jest po wybranej godzinie
    for (let i = 0; i < lessonTimes.length; i++) {
        const [lh, lm] = lessonTimes[i].split(":").map(Number);
        const lessonTimeInMinutes = lh * 60 + lm;
        
        if (lessonTimeInMinutes > timeInMinutes) {
            const nextLessonIndex = i-1;
            const nextLesson = timetable[selectedClass][selectedDay][nextLessonIndex];
            const prevLesson = timetable[selectedClass][selectedDay][nextLessonIndex-1];
            document.getElementById("output").innerText = `${prevLesson} -> ${nextLesson}`;
            return;
        }
    }

    document.getElementById("output").innerText = "Brak następnej lekcji w tym dniu.";
}
