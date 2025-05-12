function reponseBonne() {
    const resultat = document.getElementById("resultat");
    resultat.innerText = "Bonne reponse";
    resultat.style.color = "green";
}

function reponseFausse() {
    const resultat = document.getElementById("resultat");
    resultat.innerText = "Mauvaise reponse";
    resultat.style.color = "red";

}

function reset() {
    const resultat = document.getElementById("resultat");
    resultat.innerText = " ";
}

function ajouterObjet() {
    // Récupération de la valeur sélectionnée
    const select = document.getElementById("objetSelect");
    const nomObjet = select.options[select.selectedIndex].text;

    // Création du conteneur de l'objet
    const objetDiv = document.createElement("div");
    objetDiv.textContent = nomObjet + " ";

    // Bouton Supprimer
    const btnSupprimer = document.createElement("button");
    btnSupprimer.textContent = "Supprimer";
    btnSupprimer.onclick = () => {
        objetDiv.remove();
    };

    // Bouton Déplacer
    const btnDeplacer = document.createElement("button");
    btnDeplacer.textContent = "Déplacer";
    btnDeplacer.onclick = () => {
        const parent = objetDiv.parentElement;
        const nouveauParent = parent.id === "sac" ? document.getElementById("camp") : document.getElementById("sac");
        nouveauParent.appendChild(objetDiv);
    };

    // Ajout des boutons à la div de l'objet
    objetDiv.appendChild(btnSupprimer);
    objetDiv.appendChild(btnDeplacer);

    // Ajout de l'objet dans le sac à dos par défaut
    document.getElementById("sac").appendChild(objetDiv);
}
