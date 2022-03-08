/* Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.

Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

let randomNumbers = document.getElementById('random-numbers');

/* Faccio comparire a schermo 5 numeri casuali */
for (let i = 0; i < 5; i++){
    randomNumbers.innerHTML += Math.floor(Math.random() * 50) + " ";
}

console.log(randomNumbers);