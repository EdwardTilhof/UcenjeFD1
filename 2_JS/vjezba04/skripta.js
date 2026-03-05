// uvjetno grananje if

// if radi s boolean tipom podatka

const uvjet = true;

// osnovna if sintaksa treba samo if granu
if(uvjet){ // u if granu se ulazi ako je vrijednost true
    console.log('Uvjet je true');
}

// NIKADA NE RADITI - RED FLAG
if(uvjet==true){
    console.log('Ovo ne treba raditi');
    
}
// a bome niti ovo
if(uvjet===true){
    console.log('Niti ovo ne treba raditi');
}

// pošto if radi s boolean imamo i drugu granu
if(uvjet){
    console.log('Uvjet je true');
}else{ // ovdje se ulazi ako je vrijednost false
    console.log('Uvijet je false');
}

// ako ne postoji {} tada se uvjet odnosi samo na prvu sljedeću liniju
if(uvjet)
    console.log('Bez {} true');
else
    console.log('Bez {} false');
    console.log('Ovo se treba izvesti ako je false'); // ova linija nije dio else
    

// if naredba ima i else if dio
// -bolja zamjena za else if je switch

const ocjena = 3;

if(ocjena===1){
    console.log('Nedovoljan');
}else if(ocjena===2){
    console.log('Dovoljan');
}else if(ocjena===3){
    console.log('Dobar')
}
// možemo imati else if puno
else{
    console.log('Ocjena nije 1, 2 ili 3');
}

// ugnježđeni if
if(uvjet){
    if(ocjena>1){
        console.log('Oba uvjeta su zadovoljena');
    }
}

// ovo gore može kraće
if(uvjet && ocjena>1){
    console.log('Kraći način zadovoljavanja oba uvjeta');
}

// tercijarni operator ? : je zapravo inline if
// ukoliko rezultat uvjeta (true/false) pozove istu akciju (u primjeru console.log)

if(ocjena>=2){
    console.log('Pozitivna')
}else{
    console.log('Negativna');
}

console.log(ocjena>2 ? 'Pozitivna' : 'Negativna');

// falsy/truly vrijednosti
const ime=''; // if (ime) false
// const ime='Pero' // if(ime) true

if(ime){
    console.log('Ime je postavljeno');
}

// ostale falsy vrijednosti:
const b=0; // if(b) false
let objekt=null;
let nedefinirano; //undefined

const broj = Number('aaa');
console.log(broj); // NaN Not a number, NaN je falsy
