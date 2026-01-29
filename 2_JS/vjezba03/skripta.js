// Operatori
// = operator dodjeljivanja
// typeof omogućuje pristup tipu podataka
// == operator uspoređivanja samo po vriejdnosti
// === uspoređuje po tipu i po vrijednosti

// aritmetički operatori
// + - * / 
const a = 2, b=3; // simulacija unosa od korisnika (ulaz)

let rez = a + b; // algoritam
console.log(rez); // 5 izlaz

// modulo operator %
// ostatak nakon cjelobrojnog djeljenja
console.log(9 % 2); // 1
console.log(10 % 2); // 0

console.log (1000 % 100 === 0); // true

// operatori dodjele
// =
// želim vrijednost varijable rez uvećati za 2
rez = rez + 2; // u matematici se prvo izvodi desna strana i dodjeljuje lijevoj
console.log(rez); // 7
rez += 2;
console.log(rez); // 9
rez -= 5;
console.log(rez); // 4

const x = 2;
rez += x;
console.log(rez); // 6

// ako ovo imaš u kodu nešto ne štima kod tebe :) :()

rez += 1;
console.log(rez); // 7

// operatori increment i decrement
rez++; // -> ALI NITI OVO SE NE RADI
console.log(rez); //8  
// u isto vrijeme možeš koristiti i uvećavati/umanjivati vrijednost varijable
console.log(rez++); // 8 prvo sam ispisao trenutnu vrijednost od rez i nakon toga ju uvećao
console.log(++rez); // 10 (9 je bilo nakon ispisa u prethodnoj liniji) pa prvo uvećanje tek onda ispis
console.log(--rez); // 9
console.log(rez--); // 9
console.log(rez); //8

// operatori uspoređivanja
// == uspoređuje samo po vrijednosti
console.log(5 == 5); // true
console.log('5' == 5); // true
console.log(3 == 7); // false

// === uspoređuje i po tipu i po vrijednosti
console.log('Osijek' === 'Osijek'); // true
console.log('Osijek' === 'osijek'); // false
console.log( 5 === '5'); // false
console.log('Edunova' === 'Druga škola'); // false

// != različito
console.log(4 != 3); // true
console.log('4' != 4); // false

// veće od >
// veće jednako od >=
let godine = 18;
console.log(godine > 18); // false
console.log(godine >= 18); // true

// manje od <
// manje ili jednako od <=
godine = 21;
console.log(godine < 21); //false
console.log(godine <= 21); // true


// logički operatori: and (i), or (ili) i not (ne)
// booleova tablica za and (&&) - mora se u JS napisati &&
const i1 = 5 == '5'; // i1 = true
const i2 = 7 > 9; // i2 = false
// i1	    i2	    rez (i1 && i2)
// false	false	false
// false	true	false
// true	    false	false
// true	    true	true

console.log(i1 && i2); // false

// booleova tablica za or (||) ALTGR + W - mora se u JS napisati ||
// i1	    i2	    rez (i1 || i2)
// false	false	false
// false	true	true
// true	    false	true
// true	    true	true
console.log(i1 || i2); //true

// booleova tablica za not (!)
// i1	    rez (!i1)
// false	true
// true	    false

console.log(!i1); // false


// ternarni operator -> koristiti ćemo ga u if naredbi
// ? :
const poruka = godine >= 18 ? 'Punoljetan' : 'Maloljetan';
console.log(poruka);

// spajanje stringova (concatenation) +
const skola = 'Edunova';
console.log('Najbolja škola je ' + skola); // se ne preporuča, već se preporuka korištenje backtick `
console.log(`Najbolje škola je ${skola}`);
const razred = 5;
console.log('Idem u ' + razred + '. razred.');
console.log(`Idem u ${razred}. razred.`);


// spread operator (...)
// koristi se na nizovima i objektima

// na niz
const niz = [2,2,3,3]; // varijablu niz ne smijem mijenjati
console.log(niz);
const noviNiz = [1, ...niz, 4];
console.log(noviNiz);


// na objektu
const osoba = {
    ime: 'Pero',
    prezime: 'Perić'
};

console.log(osoba);
// želim proširiti pojam osobe na polaznika
const polaznik = {
    ...osoba,
    edukacija: 'Frontend'
};
console.log(polaznik);

// destructing -> suprotno od spread
// niz

const [prvi, drugi] = [1, 2]; // s desne strane se nalazi niz s dva elemenata, on je napravio dvije varijable koje imaju vrijednosti iz niza

console.log(prvi);
console.log(drugi);

// objekt destructing
const {prezime, ...objektBezPrezimena} = polaznik;
console.log(objektBezPrezimena);
console.log(prezime); // ovo mi je škart koji postoji ali ne moram ga koristiti

// nullish coalescing operator (??)
let sifra = null;
console.log(sifra ?? 'Šifra nije postavljena'); // ako je šifra postavljana ispisuje se njezina vrijednost, inače ispisuje se: Šifra nije postavljena

// optional chaining (?.)

// malo kompleksniji JSON
const korisnik = {
    adresa:{
        grad: 'Osijek'
    }
};

console.log(korisnik.adresa.grad); // ispisuje Osijek
console.log(korisnik.adresa.ulica); // undefined, kod korištenja greška

console.log(korisnik?.adresa?.ulica); // undefined, bez greške

// typeof, instanceof
console.log([3,4,5] instanceof Array); //true


// in operator
console.log('prezime' in osoba); // true
console.log('prezime' in objektBezPrezimena); // false


// NEĆEMO KORISTITI - operatori nad bitovima bitwise (& i |) - tko želi neka samostalno prouči