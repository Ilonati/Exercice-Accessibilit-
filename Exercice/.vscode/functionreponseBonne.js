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


// Défis Express

document.getElementById('texteClique').onclick = function () {
    this.style.color = 'red';
};

const btn = document.getElementById('zoomButton');

btn.onmouseenter = function () {
    this.style.transform = 'scale(1.2)';
};

btn.onmouseleave = function () {
    this.style.transform = 'scale(1)';
};
let count = 0;
document.getElementById('clickCounterBtn').onclick = function () {
    count++;
    document.getElementById('counter').innerText = count;
};
let clickCount = 0;
const btn = document.getElementById('limitedClickBtn');
const display = document.getElementById('limitedCounter');

btn.onclick = function () {
    clickCount++;
    display.innerText = clickCount;
    if (clickCount >= 3) {
        btn.disabled = true;
    }
};
document.getElementById('addParagraph').onclick = function () {
    const newP = document.createElement('p');
    newP.innerText = 'Nouveau paragraphe';
    document.getElementById('container').appendChild(newP);
};
document.getElementById('box').onclick = function () {
    this.remove();
};
const titres = document.querySelectorAll('h2');
const ul = document.getElementById('listeSommaire');

titres.forEach(titre => {
    const li = document.createElement('li');
    li.innerText = titre.innerText;
    ul.appendChild(li);
});


// La Machine à Smoothies

// Liste fixe de fruits
const fruits = ["fraise", "banane", "kiwi magique", "pomme", "ananas", "framboise", "mangue"];
let compteur = 0; // Compteur initialisé à zéro
let indexDepart = 0; // Point de départ dans le tableau

// Fonction de préparation

const preparerBtn = document.getElementById("btnSmoothie");
const btnBoire = document.getElementById("btnBoire");


preparerBtn.addEventListener("click", preparerSmoothie);
btnBoire.addEventListener("click", boireSmoothie);

// Fonction de préparation
function preparerSmoothie() {
    // Ton code ici
    const resultat = document.getElementById("resultat");
    resultat.innerHTML = "";

    let smoothie = [];

    for (let counter = 0; counter < 3; counter++) {
        // let index = indexDepart + counter;

        // if(index >= fruits.length) {
        //   index = index - fruits.length;

        // }
        let index = (indexDepart + counter) % fruits.length;
        smoothie.push(fruits[index]);

    }


    smoothie.forEach(function (fruit) {
        let p = document.createElement("p");
        p.innerText = fruit;
        resultat.appendChild(p);

    });
    indexDepart++;
    let compteurHtml = document.getElementById("compteur");
    compteurHtml.innerText = "Preparation : " + indexDepart;

    if (smoothie.includes("kiwi magique")) {
        resultat.style.backgroundColor = "green";
    } else {
        resultat.style.backgroundColor = "initial";
    }

}


// Fonction de reset
function boireSmoothie() {
    // Ton code ici
    const resultat = document.getElementById("resultat");
    resultat.innerHTML = "";

}