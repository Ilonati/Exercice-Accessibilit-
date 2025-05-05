let fruits = ['pomme', 'poire', 'abricot'];
console.log(fruits.length);
console.log(fruits[1]);
fruits[6] = 'mangue';
console.log(fruits);
console.log(fruits[18]);

let array = [1, 2, 3, 2, 1];
for (let index = 0; index < array.length; index++) {
    console.log('boucle classique', array[index]);
}

let estSymetrique = true;
for (let i = 0; i < (array.length - 1) / 2; i++) {
    if (array[i] !== array[array.length - 1 - i]) {
        estSymetrique = false;
        break;
    }
}
console.log(estSymetrique ? 'Symétrique' : 'Pas symétrique');


// Création et accès aux tableaux
let animaux = ["chien", "chat", "lapin"];
let couleurs = ["rouge", "vert", "bleu"];
console.log(couleurs[1]);
animaux[0] = 'hamster';
console.log(animaux);

// Afficher les éléments d'un tableau
animaux.push('perroquet');
animaux.shift();

console.log(animaux.includes('chat'));
console.log(animaux.join(' '));

// Taille d'un tableau
let nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nombres.length);

// Supprimer les doublons
const doublons = [1, 2, 2, 3, 4, 4, 5];

const unique = doublons.filter((valeur, index, self) => {
    return self.indexOf(valeur) === index;
})
console.log(unique);


function displayArray() {
    let fruits = ['Pomme', 'Banane', 'Abricot', 'Cerise'];
    console.log(fruits.join(' '));
}
displayArray()

function displayArray2(tab) {
    if (tab.length <= 1) return tab.join('');
    return tab.slice(0, -1).join(', ') + ' et ' + tab[tab.length - 1];
}

console.log(displayArray2(['Pomme', 'Banane', 'Abricot', 'Cerise']));

function displayArray3(arr, useAnd) {
    if (arr.length === 0) return '';
    if (arr.length === 1) return arr[0];

    if (useAnd && arr.length > 1) {
        const allButLast = arr.slice(0, -1).join(', ');
        const last = arr[arr.length - 1];
        return allButLast + ' et ' + last;
    } else {
        return arr.join(', ');
    }
}

console.log(displayArray3(['Pomme', 'Banane', 'Abricot', 'Cerise'], true));
console.log(displayArray3(['Pomme', 'Banane', 'Abricot', 'Cerise'], false));

function sortWordsInString(chaine, desc = true) {
    if (chaine.trim() === '') {
        return '';
    }

    let mots = chaine.split(' ');

    mots.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

    if (!desc) {
        mots.reverse();
    }

    return mots.join(' ');
}
console.log(sortWordsInString("je suis en train d'apprendre le JavaScript"));

// Filtrer et multiplier les nombres pairs
let nombre = [1, 2, 3, 4, 5, 6];
let resultats = nombre
    .filter(n => n % 2 === 0)   // Garde les nombres pairs
    .map(n => n * 2);           // Multiplie chaque pair par 2

console.log(resultats);


function roundDownArray(tab) {
    return tab.map((num) => Math.floor(num));
}
console.log(roundDownArray([3.7, 8.4, 2.1, 5.9]));

function sumOfArray(tab) {
    return tab.map((x) => Math.floor(x)).reduce((a, b) => a + b, 0);
}
console.log(sumOfArray([3.7, 8.4, 2.1, 5.9]));

function averageOfArray(tab) {
    const arrondis = tab.map((x) => Math.floor(x));
    const sum = arrondis.reduce((a, b) => a + b, 0);
    return sum / arrondis.length;
}
console.log(averageOfArray([3.7, 8.4, 2.1, 5.9]));

// 1. Tableau de base
let grimoire = ["bave de crapaud", "plume de phénix", "racine de mandragore"];

// 2. Fonction pour ajouter un ingrédient
function ajouterIngredient() {
    let ingredient = prompt("Quel ingrédient veux-tu ajouter au grimoire ?");
    if (ingredient && ingredient.trim() !== "") {
        grimoire.push(ingredient.trim());
        afficherGrimoire();
    } else {
        alert("Aucun ingrédient ajouté.");
    }
}

// 3. Fonction pour afficher la liste
function afficherGrimoire() {
    let html = "<h2>Ingrédients actuels :</h2>";
    html += "<ul>";
    grimoire.forEach(function (i) {
        html += "<li>" + i + "</li>";
    });
    html += "</ul>";
    document.getElementById("liste").innerHTML = html;
}

// 4. Fonction d’analyse
function analyserPotion() {
    let nb = grimoire.length;

    let totalLettres = grimoire.reduce(function (acc, item) {
        return acc + item.length;
    }, 0);

    alert("Analyse de la potion :\n" +
        "Nombre d’ingrédients : " + nb + "\n" +
        "Total de lettres utilisées : " + totalLettres);
}

// Initialisation de l’affichage
afficherGrimoire();