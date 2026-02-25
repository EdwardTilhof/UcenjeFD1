
// OOP - Objektno orjentirano programiranje

// Probajte ovo dvoje naučiti pa makar i na pamet

// Klasa je opisnik objekta

class Osoba {
    // OOP princip učahurivanje (encapsulation)
    // skrivanje svojstva
    #ime;

    // OOP princip učahurivanje (encapsulation)
    // omogućavanje pristupa skrivenom svojstu
    get ime() { return this.#ime; }
    set ime(s) { this.#ime = s; }

    setIme(s) {
        this.#ime = s;
    }

    constructor(ime = '') {
        console.log("Konstruiram objekt iz klase Osoba")
        this.#ime = ime;
    }
}

// Objekt je instanca (pojavnost) klase
// o je objekt
const o = new Osoba(); // new je poziv konstruktora
o.ime = 'Pero'; // bez set u klasi: Uncaught RangeError: Maximum call stack size exceeded
o.setIme('Marija');
console.log(o.ime);


const d = new Date();
console.log(d.getDate());

const jucer = new Date(2025, 1, 24);

const student = new Osoba('Nikolina');
console.log(student.ime);

// OOP princip nasljeđivanje (inheritance)
class Polaznik extends Osoba {

    #odradioObaveze;

    get odradioObaveze() { return this.#odradioObaveze; }
    set odradioObaveze(b) { this.#odradioObaveze = b; }

    constructor(ime = '', b = false) {
        super(ime);
        this.#odradioObaveze = b;
    }
}

[
    new Polaznik('Lucija', false), new Polaznik('Rita', true)
].forEach(o => console.log(o.ime, o.odradioObaveze));

const p = new Polaznik();
p.ime = 'Karlo';
p.odradioObaveze = true;

console.log(p.ime, p.odradioObaveze);

class Predavac extends Osoba {
    #redoviti;
    get redoviti() { return this.#redoviti; }
    constructor(ime = '', redoviti = false) {
        super(ime);
        this.#redoviti = redoviti;
    }
    toString() {
        return `Ime je ${super.ime}, redovita: ${this.#redoviti}`;
    }
}

const predavac = new Predavac('Gordana', true);
console.log(`${predavac}`); // predavac je instanca klase Predavac
console.log(p); // p je instanca klase Polaznika

console.log(jucer); // pozvala se metoda toString()

// JS još implementira Polimorfizam (višeobličje)
// Za one koji žele o OOP čitati više:
// https://github.com/tjakopec/OOP_JAVA_PHP_PYTHON_SWIFT

console.log(Math.random());

// Ideja objekta jest da bude kontejner za podatke i metode koji upravljaju tim podacima
// Što s kodom koji nema potrebu pamtiti podatke već samo izvesti neku logiku

// U OOP ako želimo samo logiku bez potrebe pamćenja podataka koristimo statične metode

class Pomocno {
    static slucajniBroj(min = 0, max = 0) {
        if (min === 0 && max === 0) {
            return Math.random();
        }
        return ((Math.random() * (max - min) + min).toFixed(0));
    }
}

console.log(Pomocno.slucajniBroj());
console.log(Pomocno.slucajniBroj(25, 75));