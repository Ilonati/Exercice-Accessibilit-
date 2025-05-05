

let utilisateur = {
    prenom: "Lucien",
    age: 45,
    ville: "Tartas",
};
console.log(utilisateur);
console.log(utilisateur.prenom);
console.log(utilisateur.age);
console.log(utilisateur.ville);

utilisateur.age = 46;
utilisateur.ville = "Dax";
console.log(utilisateur.age);
console.log(utilisateur.ville);

utilisateur.estEtudiant = false;
console.log(utilisateur.estEtudiant);

// function afficherInfos(utilisateur1) {
//     let utilisateu = {
//         prenom: "Lucien",
//         age: 46,
//         ville: "Dax",

//     }
//     console.log(`Je m’appelle ${prenom} , j’ai ${age} ans et j’habite à ${ville}.`);
// }

// afficherInfos(utilisateur1);

let utilisateurs = [
    { prenom: "Lucien", age: 45, ville: "Tartas" },
    { prenom: "Marc", age: 30, ville: "Paris" },
    { prenom: "Chloe", age: 27, ville: "Lyon" }
];

for (let i = 0; i < utilisateurs.length; i++) {
    console.log(utilisateurs[i].prenom);
}

let bibliotheque = [
    {
        titre: "Bon appetit",
        auteur: "Singl",
        anneePublication: 1999,
        estDisponible: true
    },
    {
        titre: "One year",
        auteur: "no name",
        anneePublication: 1972,
        estDisponible: false
    },
    {
        titre: "Les Misérables",
        auteur: "Victor Hugo",
        anneePublication: 1862,
        estDisponible: true
    }

];
// Fonction pour afficher les livres disponibles
function afficherLivresDisponibles() {
    console.log("Livres disponibles :");
    for (let i = 0; i < bibliotheque.length; i++) {
        if (bibliotheque[i].estDisponible) {
            console.log(bibliotheque[i].titre);
        }
    }
}
afficherLivresDisponibles();

