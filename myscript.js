/* Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.

Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

let randomNumbers = document.getElementById('random-numbers');

let generatedNumbers;

let computerNumberArray = [];

let userNumberArray = [];

/* Faccio comparire a schermo 5 numeri casuali */
for (let i = 0; i < 5; i++){
    generatedNumbers = parseInt(Math.floor(Math.random() * 50) + 1);

    randomNumbers.innerHTML += generatedNumbers + " ";

    computerNumberArray.push(generatedNumbers);
}

console.log(computerNumberArray);

/* Settiamo una costante per il tempo */
const myTimeout = 3;

setTimeout (howManyNumbers, myTimeout * 1000);

setTimeout (numbersDisappear, myTimeout*700)

/* Funzione che fa scomparire i numeri prima del prompt */
function numbersDisappear () {
    randomNumbers.classList.add('d-none');
}

/* Funzione che chiede all'utentente di scrivere i numeri che visualizzato */
function howManyNumbers() {
    
    for (let i = 0; i < 5; i++){

        let userAnswer = parseInt(prompt('Che numeri hai visto sullo schermo? Inseriscili qui!'));

        userNumberArray.push(userAnswer);

        document.getElementById('user-answer').innerHTML += " " + userAnswer;

        /* Una volta inseriti i numeri dall'utente, quelli scomparsi ritornano visibili */
        randomNumbers.classList.remove('d-none');
    }

    console.log(userNumberArray);

    for (let i = 0; i < userNumberArray.length; i++) {
        if (computerNumberArray.includes(userNumberArray[i])){
            result.innerHTML = `Hai indovinato i seguenti numeri: ${userNumberArray[i]}`;
        } 
    }
}

let result = document.getElementById('result');
/* Adesso dobbiamo confrontare gli elementi di userNumberArray e computerNumberArray */


