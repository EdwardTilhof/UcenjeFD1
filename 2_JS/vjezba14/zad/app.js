/**
* GENERATOR FUNKCIJA: tijekUpoznavanja
* Upravlja stanjima aplikacije koristeći 'yield'.
*/
function* tijekUpoznavanja() {
    // 1. KORAK: Tražimo ime
    // yield šalje objekt prema van i pauzira funkciju
    const ime = yield {
        naslov: 'Tko si ti?',
        opis: 'Prvo nam reci svoje ime kako bismo znali s kim pričamo.',
        prikaziUnos: true
    };

    const godina = yield {
        naslov: `Drago nam je, ${ime}. Koliko imas godina?`,
        opis: 'Drugo nam reci koliko imas godina',
        prikaziUnos: true
    };

    // 2. KORAK: Tražimo grad (koristimo 'ime' dobiveno iz prethodnog koraka)
    let porukaZaGodine;
    const starost = parseInt(godina)

    if (starost >= 55) {
        porukaZaGodine = `Opa imaš ${starost}? Pa ti si stvarno već star!`
    } else if (starost >= 35) {
        porukaZaGodine = `Već imaš ${starost}? Pa ti si pun iskustva!`
    } else if (starost >= 18) {
        porukaZaGodine = `Wow, već imaš ${godina} godina! Odrasla si osoba.`;
    } else {
        porukaZaGodine = `Tek ti je ${godina}? Još si mlad/a!`;
    };

    const grad = yield {
        naslov: porukaZaGodine,
        opis: 'Iz kojeg grada dolaziš?',
        prikaziUnos: true
    };

    // 3. KORAK: Završna poruka
    return {
        naslov: 'Sve je spremno!',
        opis: `Pozdrav za ${ime} (${starost}) iz grada ${grad}. Uspješno ste završili proces!`,
        prikaziUnos: false,
        gotovo: true
    };
}

// Inicijalizacija elemenata (JavaScript varijable na hrvatskom)
const tijek = tijekUpoznavanja();
const gumbDalje = document.getElementById('gumb-dalje');
const naslovElement = document.getElementById('glavni-naslov');
const opisElement = document.getElementById('glavni-opis');
const kontejnerUnosa = document.getElementById('kontejner-unosa');
const poljeZaUnos = document.getElementById('polje-za-unos');

let zadnjiUnosKorisnika = '';

/**
 * FUNKCIJA: izvršiSljedećiKorak
 * Poziva se na klik gumba i budi generator.
 */
function izvrsiSljedeciKorak() {
    setTimeout(() => {
        poljeZaUnos.focus();
    }, 100);
    // Spremi što je korisnik upisao prije nego što krenemo na sljedeći yield
    zadnjiUnosKorisnika = poljeZaUnos.value;
    poljeZaUnos.value = ''; // Očisti polje za sljedeći put

    // Prosljeđujemo unos natrag u generator pomoću .next()
    const rezultat = tijek.next(zadnjiUnosKorisnika);

    if (!rezultat.done) {
        const podaci = rezultat.value;

        // Ažuriranje sučelja (UI)
        naslovElement.innerText = podaci.naslov;
        opisElement.innerText = podaci.opis;

        if (podaci.prikaziUnos) {
            kontejnerUnosa.classList.remove('skriveno');
        } else {
            kontejnerUnosa.classList.add('skriveno');
        }

        gumbDalje.innerText = 'Nastavi';
    } else {
        // Kraj - generator je vratio 'return'
        const konacniPodaci = rezultat.value;
        naslovElement.innerText = konacniPodaci.naslov;
        opisElement.innerText = konacniPodaci.opis;

        gumbDalje.classList.add('skriveno');
        kontejnerUnosa.classList.add('skriveno');
    }
}

// 1. Klik na gumb
gumbDalje.addEventListener('click', izvrsiSljedeciKorak);

// 2. Pritiskom na tipku "Enter" u polju za unos
window.addEventListener('keydown', (e) => {
    // Provjeri je li pritisnut Enter i je li gumb uopće vidljiv
    if (e.key === 'Enter' && !gumbDalje.classList.contains('skriveno')) {
        izvrsiSljedeciKorak();
    }
});