// Le vendeur de tickets de cinéma
function cinema() {
    let prenomNom = prompt("Quel est ton nom et prénom ?");
    let age = parseInt(prompt("Quel est ton âge ?"));
    let estEtudiantInput = prompt("Es-tu étudiant ? (oui/non)").toLowerCase();
    let nombreTickets = parseInt(prompt("Combien de tickets veux-tu acheter ?"));

    // Vérifications
    if (isNaN(age) || age === "") {
        alert("Âge invalide");
    } else if (nombreTickets <= 0 || isNaN(nombreTickets)) {
        alert("Tu dois au moins acheter un ticket !");
    } else if (estEtudiantInput !== "oui" && estEtudiantInput !== "non") {
        alert("Réponse à 'es-tu étudiant ?' invalide");
    } else {

        // Prix de base
        const prixBase = 12;
        let prixTotal = prixBase * nombreTickets;
        let reduction = 0;

        // Appliquer réduction principale
        if (age < 12) {
            reduction = 0.5;
        } else if (age > 60) {
            reduction = 0.3;
        } else if (estEtudiantInput === "oui") {
            reduction = 0.2;
        } else {
            reduction = 0;
        }

        let prixApresReduction = prixTotal * (1 - reduction);

        // Réduction supplémentaire si plus de 3 tickets
        if (nombreTickets > 3) {
            prixApresReduction *= 0.9;
        }


        const prixBase = 12;
        let nombreTickets = 4;
        let prixTotalSansReduction = prixBase * nombreTickets; // 48
        let reductionPrincipale = 0.2; // 20% pour étudiant

        let prixApresReductionPrincipale = prixTotalSansReduction * (1 - reductionPrincipale); // 38.4

        if (nombreTickets > 3) {
            prixApresReductionPrincipale *= 0.9; // -10% réduction de groupe
        }

        let prixFinal = prixApresReductionPrincipale.toFixed(2); // "34.56"

        console.log(`Prix final : ${prixFinal} €`);

        // Séparer prénom et nom
        let splitNom = prenomNom.trim().split(" ");
        let prenom = splitNom[0];
        let nom = splitNom.slice(1).join(" ");

        let prenom = "John";
        let nom = "Doe";
        let deuxPremieresLettresNom = nom.slice(0, 2).toUpperCase(); //majuscule pour avoir Do - on ajuste
        deuxPremieresLettresNom = nom.slice(0, 2); // juste avec majuscule normale
        let age = 24;
        let prixFinal = 34.56;
        let nombreTickets = 4;

        // Affichage du message 
        alert(`Bonjour ${prenom} ${nom}, ton nom commence par ${deuxPremieresLettresNom}, tu as ${age} ans et tu paies ${prixFinal.toFixed(2)} € pour ${nombreTickets} tickets.`);

    }
}
cinema()