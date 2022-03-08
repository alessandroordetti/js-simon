/* Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.

Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

let randomNumbers = document.getElementById('random-numbers');

/* Faccio comparire a schermo 5 numeri casuali */
for (let i = 0; i < 5; i++){
    randomNumbers.innerHTML += Math.floor(Math.random() * 50) + 1 + " ";
}

console.log(randomNumbers);

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

        document.getElementById('user-answer').innerHTML += " " + userAnswer;
    }
}