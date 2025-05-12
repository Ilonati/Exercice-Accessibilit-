function revelerAnimal(magie) {
    if (magie === 1) {
        alert("Ton animal magique est une Licorne ");
    } else if (magie === 2) {
        alert("Ton animal magique est une Grenouille ");
    } else if (magie === 3) {
        alert("Ton animal magique est un Dragon ");
    } else if (magie === 4) {
        alert("Ton animal magique est un Hibou ");
    } else if (magie === 5) {
        alert("Ton animal magique est un Escargot ");
    } else {
        alert("Chiffre inconnu : tu es trop puissant pour être classé dans notre bestiaire !");
    }
}
let choix = prompt("Choisis un chiffre entre 1 et 5 pour découvrir ton animal magique :");
choix = Number(choix);

revelerAnimal(choix);

while (isNaN(choix)); // Redemander si ce n'est pas un nombre.


// Message final
alert("Merci d'avoir joué au jeu du bestiaire magique !");
