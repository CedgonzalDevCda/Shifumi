let choicePlayer = ""
let choiceIA = ""

let result = document.querySelector('.result')
let compteur = {
    ciseaux: 0,
    feuille: 0,
    pierre: 0
}

++ compteur.feuille

console.log(compteur)


const selectCard = (e) => {
    // fill the choice of the player with alt img
    choicePlayer = e.target.alt
    console.log(choicePlayer)

    // IA select a card
    selectionIA()
    console.log(choiceIA)

    // Compare cards between player-IA and result
    compareSelection()

    // Count the card selected by the player
    countPlayerCard(choicePlayer)
    console.log(compteur)
};

document.addEventListener("click", selectCard)


// Function selection IA lvl 0
const selectionIA = (e) => {
    let randomIA = Math.floor(Math.random() * 3) + 1
    if (randomIA == "1") {
        choiceIA = "pierre"
    } else if (randomIA == "2") {
        choiceIA = "feuille"
    } else if (randomIA == "3") {
        choiceIA = "ciseaux"
    }
}

// Function to count the card selected by the player
const countPlayerCard = (choicePlayer) => {
    if (choicePlayer == "pierre") {
        compteur.pierre = compteur.pierre + 1
    } else if (choicePlayer == "feuille") {
        compteur.feuille = compteur.feuille + 1
    } else if (choicePlayer == "ciseaux") {
        compteur.ciseaux = compteur.ciseaux + 1
    }
}


// Compare player-IA and result

const compareSelection = () => {
    if (choicePlayer == choiceIA) {
        result.innerHTML = `Résultat: Egalité ; choix IA = "${choiceIA}"`
    } else if (choicePlayer == "pierre" && choiceIA == "ciseaux") {
        result.innerHTML = `Résultat: Gagné ; choix IA = "${choiceIA}"`
    } else if (choicePlayer == "ciseaux" && choiceIA == "feuille") {
        result.innerHTML = `Résultat: Gagné ; choix IA = "${choiceIA}"`
    } else if (choicePlayer == "feuille" && choiceIA == "pierre") {
        result.innerHTML = `Résultat: Gagné ; choix IA = "${choiceIA}"`
    } else {
        result.innerHTML = `Résultat: Perdu ; choix IA = "${choiceIA}"`
    }
}