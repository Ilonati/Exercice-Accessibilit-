
// let score = 100;
// let energy = 80;
// let hasPotion = false;
// let inventory = "épée en bois";
// let isAlive = true;

// console.log(score);
// console.log(energy);
// console.log(hasPotion);
// console.log(inventory);
// console.log(isAlive);

// hasPotion = true;
// energy = energy + 20;
// console.log(hasPotion, energy)

// energy = energy - 40;
// score = score - 25;
// console.log(energy, score)

// inventory = "";
// console.log(inventory)

// energy = energy - 40;
// score = score - 30;
// console.log(energy, score)

// inventory = inventory + "arc";
// console.log(inventory)

// energy = 0;
// console.log(energy)

// isAlive = false;
// console.log(isAlive)




// let motEntreParLeJoueur = prompt("Entrez le mot de passe du donjon :");
// let motDePasse = "afec";
// let aUnBadgeMagique = true;
// let niveauDeForce = 8;
// let age = 20;


// if ((motEntreParLeJoueur == motDePasse)) {
//     if ((age >= 18) && (aUnBadgeMagique == true) && (niveauDeForce >= 8)) {
//         alert("🟢 Bienvenue dans le donjon, aventurier !")

//     } else {
//         alert("🔴 Accès refusé.Tu ne remplis pas toutes les conditions…")
//     }

// } else {
//     alert("Mot de passe incorrect.")
// }




function defi1() {

    let firstName = 'Anne';
    let lastName = 'Bhjvh';
    let fullName = firstName + ' ' + lastName;
    console.log(fullName);

    let greeting = "bonjour, je m'appelle " + firstName + " " + lastName;
    console.log(greeting);
    alert(greeting);

}

// defi1()

function defi2() {

    let sujet = "le chat";
    let verbe = "dort";
    let complément = "sur le canapé";
    console.log(sujet, verbe, complément);
    alert(sujet + ' ' + verbe + ' ' + complément);

}

// defi2()

function defi3() {
    let anneNaissance = 1992;
    let anneeActuelle = 2025;
    let message = "Tu as " + (anneeActuelle - anneNaissance);
    console.log(message);
    alert(message);
}

// defi3()

function defi4() {
    let a = 12;
    let b = 8;
    let message = "La somme est " + (a + b);
    console.log(message);
    alert(message);
}
// defi4()

function defi5() {
    let Nom = "Tiho";
    let Prenom = "Ilo";
    console.log(Nom + ' ' + Prenom);
    Nom = "Iho";
    let Age = 18;
    const PI = 3.14;
    console.log(Nom + ' ' + Prenom);
    console.log(Age += 1);
    console.log(PI);
    console.log(PI = 5);
}
// defi5()

function capitalizeFirstLetter() {

    let test = 'hello';

    let premiereLettre = test.toUpperCase().slice(0, 1)
    let suiteDesLettres = test.slice(1)
    console.log(premiereLettre + suiteDesLettres)


    // const hello = ["hello", "Hello"];
    // console.log(hello.slice(1));
    // alert(hello.slice(1));
}
// capitalizeFirstLetter()

function defi7() {
    let test = 'hello hello hello';

    console.log(`${test} ${test.length}`);
}
defi7()