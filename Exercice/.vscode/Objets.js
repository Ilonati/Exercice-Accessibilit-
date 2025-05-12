

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
//     let utilisateur = {
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

//  Fonction pour emprunter un livre
function emprunterLivre(titre) {
    for (let i = 0; i < bibliotheque.length; i++) {
        if (bibliotheque[i].titre === titre) {
            if (bibliotheque[i].estDisponible) {
                bibliotheque[i].estDisponible = false;
                console.log("Livre emprunté avec succès !");
                return;
            } else {
                console.log("Ce livre n'est pas disponible.");
                return;
            }
        }
    }
    console.log("Livre non trouvé dans la bibliothèque.");
}

//  Fonction pour rendre un livre
function rendreLivre(titre) {
    for (let i = 0; i < bibliotheque.length; i++) {
        if (bibliotheque[i].titre === titre) {
            bibliotheque[i].estDisponible = true;
            console.log("Merci pour le retour du livre !");
            return;
        }
    }
    console.log("Livre non trouvé dans la bibliothèque.");
}

// Le créateur de fiches de films

let film = {
    titre: "Inception",
    realisateur: "Christopher Nolan",
    annee: 2010,
    duree: 148,
    vu: false,
};
let VuLeFilm = prompt("As-tu deja vu ce film ? (oui/non)").toLowerCase();


if (VuLeFilm === "oui" && VuLeFilm !== "non") {

    film.vu = true;

    let note = prompt("Choisis un chiffre entre 1 et 5 pour doner la note :");
    film.note = Number(note);

    film.note = Notes(film.note);

    console.log(film);


} else if (isNaN(VuLeFilm) || VuLeFilm === "non") {
    alert("Le script s’arrête là, et le film est affiché sans note !")
}
console.log("Le script s’arrête là, et le film est affiché sans note !");


function Notes(note) {
    if (note === 1) {
        return ("Ta note est 1 ");
    } else if (note === 2) {
        return ("Ta note est 2");
    } else if (note === 3) {
        return ("Ta note est 3");
    } else if (note === 4) {
        return ("Ta note est 4 ");
    } else if (note === 5) {
        return ("Ta note est 5 ");
    } else {
        return ("Chiffre inconnu !");
    }
}


// Notes(note);

function afficherFiche(film) {
    document.querySelector('#fiche').innerHTML = `
    ${film.titre}<br>
    Realisateur: ${film.realisateur}<br>
    ${film.annee}<br>
    ${film.duree}<br>
    ${film.vu}<br>
    ${film.note}<br>
    
    `;

}
afficherFiche(film);

