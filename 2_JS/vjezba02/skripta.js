// varijabla je prostor u memoriji
// može biti različitih tipova
// u JS se može definirati na tri različita način

// ulaz podatka u program
// prompt uvijek unosi string
const ime = 'Edunova'; //prompt('Unesi svoje ime');
// Fiksno stavljam neku vrijednost da me pri izvođenju ne pita svaki puta za unos
// ako hoćete testirati obrišite 'Edunova' //

console.log(`Dobar dan ${ime}!`);

console.log(typeof ime, ime);

// unos godina je string
const unosGodina= '2026' // prompt('Unesi godinu');

// konverzija u broj
const godina = Number(unosGodina);

console.log(typeof godina, godina);

// odavdje više ne koristim prompt već fiksno string

// decimalni broj - floating point
const unosDecimalniBroj = '3.14'; // decimalni dio se opdvaja s točka

const decimalniBroj = parseFloat(unosDecimalniBroj);

console.log(typeof decimalniBroj, decimalniBroj);


// cijeli broj
const cijelBroj = parseInt('12');
console.log(typeof cijelBroj, cijelBroj);

// logička vrijednost
const logickaVrijednost = true; // ili false

console.log(typeof logickaVrijednost, logickaVrijednost);


// const je konstanta, varijabla se ne može mijenjati
// logickaVrijednost=false; //Uncaught TypeError: Assignment to constant variable.


// "prava" varijabla u JS
let broj = 7;

// let dozvoljava prmjenu vrijednosti varijable
broj = 9;

console.log(typeof broj, broj);


//let broj = 2; Ne može se redeklarirati varijabla s let

// JS je interpreter
broj = '9'; // ja sada mijenjam tip varijable

console.log(typeof broj, broj);

// STARO, ne koristiti - što ne znači da ne postoji

var i = 7;
console.log(typeof i, i);
i='7';
console.log(typeof i, i);
var i = true; // var omogućava redeklaraciju i to nie dobro
console.log(typeof i, i);


const velikiCijeliBroj = 4546546546546548465465n;
console.log(typeof velikiCijeliBroj, velikiCijeliBroj);

let x; //undefined
console.log(typeof x, x);
x=6;
console.log(typeof x, x);

let y = null;
console.log(typeof y, y);

// JSON - javaScript Object Notation
const osobaObjekt = {
    ime:'Pero',
    godine: 27,
    znaProgramirati: true
};

console.log(typeof osobaObjekt, osobaObjekt);
console.table(osobaObjekt);

const brojevi  = [2,3,1,2]; // ALTGR + F daje [
console.log(typeof brojevi, brojevi); // piše object ali to je Array

const podaciBackend = [
    {
        ime: 'Pero',
        prezime: 'Perić'
    },
    {
        ime: 'Ana',
        prezime: 'Majić'
    }
];
console.table(podaciBackend);

// tradicionalni način pisanja funckija
function pozdrav(){
    console.log('Hello iz funckije');
}

console.log(typeof pozdrav, pozdrav);

// trenutni način pitanja funckija
const pozdravi = () => console.log('Hello iz funkcije nove');

console.log(typeof pozdravi, pozdravi);


const id1 = Symbol('id'); // ovo ispod '' je opis
const id2 = Symbol('id');

console.log(typeof id1, id1);

// operator provjere jednakosti
// ==   -> provjera samo po vrijednosti '2' je jednako 2
// ===  -> provjerava po tipu i po vrijednost '2' nije jednako 2
console.log(id1 == id2);
console.log(id1 === id2);

