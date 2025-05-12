// Affichage du message 
function saluerUtilisateur() {

    let prenom = "Ive";
    let nom = "Lbn";


}
alert(`Bonjour ${prenom} .`);
// saluerUtilisateur()

function addition(a, b) {
    let a = 8;
    let b = 3;
    return a + b;

    const resultat = addition(8, 3);
    console.log(resultat); // Affichera 11 dans la console
}

// addition(a, b)

function estPair(nombre) {
    return nombre % 2 === 0;


    // Tests de la fonction
    console.log(estPair(2));  // true
    console.log(estPair(7));  // false
    console.log(estPair(0));  // true
    console.log(estPair(15)); // false
    console.log(estPair(28)); // true
}
// estPair(nombre)

function calculerMoyenne() {
    return (1 + 2 + 3) / 3;


    // Exemple d'utilisation
    const moyenne = calculerMoyenne(1, 2, 3);
    console.log("La moyenne est : " + moyenne);
}
// calculerMoyenne()

