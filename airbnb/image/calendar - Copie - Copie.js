document.addEventListener("DOMContentLoaded", function () {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let selectedDates = []; // Tableau pour stocker les dates sélectionnées

    let currentMonth = new Date().getMonth(); // Mois actuel
    let currentYear = new Date().getFullYear(); // Année actuelle

    // Fonction pour générer les jours du calendrier
    function generateCalendar(month, year) {
        console.log("Génération du calendrier pour le mois:", monthNames[month], year);

        const daysContainer = document.getElementById("days");
        daysContainer.innerHTML = ""; // Effacer le contenu précédent
        document.getElementById("month").textContent = monthNames[month];
        document.getElementById("year").textContent = year;

        const firstDay = new Date(year, month, 1).getDay(); // Jour de la semaine du premier jour du mois
        const daysInMonth = new Date(year, month + 1, 0).getDate(); // Nombre de jours dans le mois

        // Remplir les jours vides avant le premier jour du mois
        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement("div");
            daysContainer.appendChild(emptyCell);
        }

        // Ajouter les jours du mois
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement("div");
            dayElement.textContent = day;
            dayElement.classList.add("day");
            dayElement.dataset.date = `${year}-${month + 1}-${day}`; // Ajouter l'attribut de date

            // Ajouter un écouteur d'événement pour la sélection
            dayElement.addEventListener("click", () => selectDate(day, month, year, dayElement));

            // Vérifier si le jour est sélectionné
            if (isSelected(day, month, year)) {
                dayElement.classList.add("selected");
            }

            daysContainer.appendChild(dayElement);
        }
    }

    // Fonction pour sélectionner une date
    function selectDate(day, month, year, element) {
        const dateString = `${year}-${month + 1}-${day}`;

        if (selectedDates.length === 0) {
            // Ajoute la première date sélectionnée
            selectedDates.push(dateString);
            element.classList.add("selected");
        } else if (selectedDates.length === 1) {
            // Ajoute la seconde date et colore la plage de dates
            selectedDates.push(dateString);
            const startDate = new Date(selectedDates[0]);
            const endDate = new Date(selectedDates[1]);

            // Assurez-vous que la première date est avant la seconde
            if (startDate > endDate) {
                selectedDates.reverse(); // Inverser les dates
                [startDate, endDate] = [endDate, startDate];
            }

            // Change la couleur des jours sélectionnés
            const calendarDays = document.querySelectorAll(".day");
            calendarDays.forEach(day => {
                const currentDate = new Date(day.dataset.date);
                if (currentDate >= startDate && currentDate <= endDate) {
                    day.classList.add("selected");
                } else {
                    day.classList.remove("selected"); // Enlève la sélection des autres jours
                }
            });
        } else {
            // Réinitialise la sélection
            selectedDates = [];
            calendarDays.forEach(day => day.classList.remove("selected"));
            selectedDates.push(dateString);
            element.classList.add("selected");
        }

        console.log("Selected dates:", selectedDates);
    }

    // Fonction pour vérifier si un jour est déjà sélectionné
    function isSelected(day, month, year) {
        const dateString = `${year}-${month + 1}-${day}`;
        return selectedDates.includes(dateString);
    }

    // Gestion des boutons de navigation du mois
    document.querySelector(".prev-month").addEventListener("click", () => {
        if (currentMonth === 0) {
            currentMonth = 11;
            currentYear--;
        } else {
            currentMonth--;
        }
        generateCalendar(currentMonth, currentYear);
    });
    document.addEventListener("DOMContentLoaded", function () {
    const chooseDates = document.getElementById("choose-dates");
    const imFlexible = document.getElementById("im-flexible");

    // Fonction pour gérer le clic sur "Choose Dates"
    chooseDates.addEventListener("click", () => {
        chooseDates.classList.add("active");
        imFlexible.classList.remove("active");
    });

    // Fonction pour gérer le clic sur "I'm Flexible"
    imFlexible.addEventListener("click", () => {
        imFlexible.classList.add("active");
        chooseDates.classList.remove("active");
    });
});


    document.querySelector(".next-month").addEventListener("click", () => {
        if (currentMonth === 11) {
            currentMonth = 0;
            currentYear++;
        } else {
            currentMonth++;
        }
        generateCalendar(currentMonth, currentYear);
    });

    // Initialisation du calendrier au chargement
    generateCalendar(currentMonth, currentYear);
});
document.addEventListener("DOMContentLoaded", function () {
    const chooseDates = document.getElementById("choose-dates");
    const imFlexible = document.getElementById("im-flexible");

    // Fonction pour gérer le clic sur "Choose Dates"
    chooseDates.addEventListener("click", () => {
        chooseDates.classList.add("active");
        imFlexible.classList.remove("active");
    });

    // Fonction pour gérer le clic sur "I'm Flexible"
    imFlexible.addEventListener("click", () => {
        imFlexible.classList.add("active");
        chooseDates.classList.remove("active");
    });
});
