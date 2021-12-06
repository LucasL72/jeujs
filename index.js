console.log("coucou");

const maxessai = 6; // nb d'essai maximum 
let chiffremyst = nbAleatoire(0, 100) // chiffre myst
let essai = ""; // essai actif
console.log(chiffremyst);

const input = document.getElementById("valeur")
console.log(input);
const calcul = document.getElementById("calcul")
console.log(calcul);
const resultat = document.getElementById("resultat")
console.log(resultat);

document.getElementById("nbtry").innerHTML = essai


input.addEventListener("input",
    function () {
        console.log("Input : ", input.value);

    })

calcul.addEventListener("click", function () {
    console.log("Nombre : ", input.value)
    console.log('type: ', typeof Number(input.value), Number(input.value))

    /* Si le nb d'essai est écoulé */
    if (essai >= maxessai) {
        console.log("Vous avez perdu, retentez votre chance");
        alert("Vous avez perdu, retentez votre chance")
        tryAgain();
        return
    }

    /* le nb n'est pas compris entre 0 et 100 */
    else if (Number(input.value) < 0 || Number(input.value) > 100) {
        console.log("Le nombre enregistré n'est pas compris entre 0 et 100");
        resultat.innerHTML = "Le nombre enregistré n'est pas compris entre 0 et 100"
    }

    /* le nb rentré est supérieur au chiffre mystère*/
    else if (Number(input.value) > chiffremyst) {
        console.log("Le nombre enregistré est trop grand");
        resultat.innerHTML = "Le nombre enregistré est trop grand"
    }

    /* le nb rentré est inférieur au chiffre mystère*/
    else if (Number(input.value) < chiffremyst) {
        console.log("Le nombre enregistré est trop petit");
        resultat.innerHTML = "Le nombre enregistré est trop petit"
    }
    /* le nb rentré est égale au chiffre mystère c'est gagné*/
    else if (Number(input.value) === chiffremyst) {
        console.log("Vous avez trouvé la bonne réponse");
        resultat.innerHTML = "Vous avez trouvé la bonne réponse"
        alert("Bien joué")
    } else {
        console.log("Une erreur est survenu!");
        resultat.innerHTML = "Une erreur est survenu !"
    }


    /* Incrémentation d'essai pour savoir le nb d'essais actifs */
    essai++
    document.getElementById("nbtry").innerHTML = "Nbr essai: " + essai

})


function nbAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function tryAgain() {
    essai = 0
    resultat.innerHTML = `Tu as perdu ! Le nombre mystère était ${chiffremyst}, retentez votre chance! `
    chiffremyst = nbAleatoire(0, 100)
}

function ggWp() {
    essai = 0
    resultat.innerHTML = `Bravo vous avez trouvé le nombre mystère!`
    chiffremyst = nbAleatoire(0, 100)
}

console.log("Fin");