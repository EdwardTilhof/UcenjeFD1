// Uvjetno grananje if

// if radi s boolean tipom podataka

const uvjet = false

// osnovna if sintaksa treba samo if granu

if (uvjet) { // u if granu se ulazi ako je vrijednost true
    console.log('Uvjet je true');

}

// NIKADA NE RADITI

if (uvjet == true) {
    console.log('Ovo ne treba raditi');
}

// A BOME NITI OVO
if (uvjet === true) {
    console.log('Niti ovo ne treba raditi');
}

// pošto if radi s boolean imamo i drugu granu
if (uvjet) {
    console.log('Uvjet je true');
} else { // ovdje se ulazi ako je uvjet false
    console.log('Uvjet je false');
}

// ako ne postoje {} tada se uvjet odnosiu samo na prvu sljedecu liniju

if (uvjet)
    console.log('Bez {} true');
else
    console.log('Bez {} false');
console.log('Ovo se treba izvesti ako je uvjet false'); // ova linija nije dio else


// if naredba ima i else if dio
// - volja zamjena za else if je switch

const ocjena = 3;
if (ocjena === 1) {
    console.log('Nedovoljan');
} else if (ocjena === 2) {
    console.log('Dovoljan');
} else if (ocjena === 3) {
    console.log('Dobar');
} else if (ocjena === 4) {
    console.log('Vrlo dobar');
} else if (ocjena === 5) {
    console.log('Odličan');
}

// mozemo imati else if puno
else {
    console.log('Ocjena mora biti unutar parametra 1-5');
}

// ugnjezdjeni if

if (uvjet) {
    if (ocjena > 1) {
        console.log('Oba uvjeta su zadovoljena');
    }
}

// Ovo moze i krace

if (uvjet && ocjena > 1) {
    console.log('Kraci nacin zadovoljavanja uvjeta');
}

// tercijarni operator ? : je zapravo inline if
// ukoliko rezultat uvjeta (true/false) pozove istu akciju (u primjeru console.log)

if (ocjena >= 2) {
    console.log('Pozitivna');
} else {
    console.log('Negativna');
}

console.log(ocjena>2 ? 'Pozitivna' : 'Negativna');

// falsy vrijednosti
const ime='';

if(ime){
    console.log('Ime je postavljeno');
}

const b=0;
let objekt=null;
let nedefinirano;

const broj = Number('aaa');
console.log(broj); // NaN "Not a number", NaN je falsy


