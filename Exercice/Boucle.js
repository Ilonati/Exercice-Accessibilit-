// let str = 'Lucie';
// for (let i = 0; i < 5; i++) {
//     console.log('Itération numéro:', i);
//     console.log(str.charAt(i));
// }


// let j = 0;
// while (j < 5) {
//     console.log('Itération numéro:', j);
//     j++;
// }

// // Affiche le nombre 5 dix fois dans la console // Pour ce défi, tu vas utiliser for().
for (let i = 0; i < 10; i++) {
    console.log(5);
}

// // Affiche les nombres de 1 à 10 dans la console // Pour ce défi, tu vas utiliser for().
for (let i = 1; i < 11; i++) {
    console.log(i);
}
// // Affiche uniquement les nombres pairs entre 1 et 20 // Pour ce défi, tu vas utiliser modulo et for().
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
// // Affiche les multiples de 3 entre 1 et 30 // Pour ce défi, tu vas utiliser modulo et for().
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

function PairImpair() {
    let nombre = Number(prompt('donner un chiffre'));

    if (nombre % 2 == 0) {
        alert('pair');

    }
    else {
        alert('impair');
    }
}

// PairImpair();

// Nombres pairs de 0 à 20
let i = 0;

while (i <= 20) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}
// Table de multiplication
function tableMultiplication(nombre) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${nombre} x ${i} = ${nombre * i}`);
    }
}


tableMultiplication(7);

function tableMultiplication(nombre) {
    for (let i = 1; i <= 5; i++) {
        console.log(`${nombre} x ${i} = ${nombre * i}`);
    }
}
tableMultiplication(5);

// FizzBuzz Affiche les nombres de 1 à 20. Remplace :// les multiples de 3 par “Fizz”
// les multiples de 5 par “Buzz” // les deux par “FizzBuzz”
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Compter les voyelles
function Voyelles(phrase) {
    const voyelles = "aeiouy";

    let compter = 0;
    phrase = phrase.toLowerCase();

    for (let i = 0; i < phrase.length; i++) {
        if (voyelles.includes(phrase[i])) {
            compter++;
        }
    }
    return compter;
}
const phrase = "Bonjour tout le monde";
console.log(`Le nombre de voyelles dans "${phrase}" est:`, Voyelles(phrase));

// Pyramide d’étoiles
function pyramid(hauteur) {
    for (let i = 1; i <= hauteur; i++) {
        let ligne = '';
        for (let j = 1; j <= hauteur - i; j++) {
            ligne += '';

        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            ligne += '*';
        }
        console.log(ligne);
    }
}
pyramid(5);

// Jeu de devinettes
function Devinettes(nombreCorrect) {
    let essai = 0;
    let guess = 0;
    while (guess !== nombreCorrect) {
        let nbDeviner = parseInt(prompt('Devine : '));
        guess = nbDeviner;
        essai++;
        console.log(`Essai ${essai}: Vous avez devine ${guess}`);
    }
    console.log(`Bravo, vous avez trouve le nombre ${nombreCorrect} en ${essai} essais !`);
}
// Devinettes(67);

// Le distributeur de bonbons
let argent = prompt("Combien d euros tu veux inserer dans le distributeurm ?");
argent = Number(argent);

while (argent >= 2) {
    console.log("Bonbon distribue !");

    argent = argent - 2;
    console.log(`Il resre ${argent} euros`);
    alert(`Il resre ${argent} euros`);
}
console.log("Credits insuffisants. Operation terminee.");
alert("Credits insuffisants. Operation terminee.");

