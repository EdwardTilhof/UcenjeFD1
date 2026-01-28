const ime = 'Edunova'; //prompt('unesi svoje ime');

console.log(`Dobar dan ${ime}!`);

console.log(typeof ime, ime);

const unosGodina= '2026' // prompt(`Unesi godinu`);

const godina = Number(unosGodina);

console.log(typeof godina, godina);

const unosDecimalniBroj = '3.14'

const decimalniBroj = parseFloat(unosDecimalniBroj)

console.log(typeof decimalniBroj, decimalniBroj)

const cijeliBroj = parseInt('12');
console.log(typeof cijeliBroj, cijeliBroj);

const logickaVrijednost = true;

console.log(typeof logickaVrijednost, logickaVrijednost);

let broj = 7;

broj = 9;

console.log(typeof broj, broj);

broj = '9'; 

console.log(typeof broj, broj);

var i = 7;
console.log(typeof i, i);
i='7';
console.log(typeof i, i);
var i = true;
console.log(typeof i, i);

const veilikiCijeliBroj = 4141354151351351n;
console.log(typeof veilikiCijeliBroj, veilikiCijeliBroj);

const osobaObjekt = {
    ime: 'Pero',
    godina: 27,
    znaProgramirati: true,
}

console.log(typeof osobaObjekt, osobaObjekt);
console.table(osobaObjekt);

const brojevi = [2,3,1,2,5];
console.log(typeof brojevi, brojevi);

function pozdrav(){
    console.log('Hello iz funkcije');
}

console.log(typeof pozdrav, pozdrav);

const pozdravi = () => console.log('Hello iz funkcije nove');

console.log(typeof pozdravi, pozdravi);

const id1 = Symbol('id');
const id2 = Symbol('id');

console.log(typeof id1, id1);

console.log(id1 == id2)
console.log(id1 === id2)