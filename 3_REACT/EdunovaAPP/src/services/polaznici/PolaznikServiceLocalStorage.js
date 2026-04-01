const STORAGE_KEY = 'polaznici';

// Pomoćna funkcija za dohvaćanje podataka iz local storage-a
function dohvatiSveIzStorage() {
    const podaci = localStorage.getItem(STORAGE_KEY);
    return podaci ? JSON.parse(podaci) : [];
}

// Pomoćna funkcija za spremanje podataka
function spremiUStorage(podaci) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(podaci));
}

// 1/4 Read - dohvati sve
async function get() {
    const polaznici = dohvatiSveIzStorage();
    return {success: true,  data: [...polaznici] };
}

// Dohvati jedan po šifri
async function getBySifra(sifra) {
    const polaznici = dohvatiSveIzStorage();
    const polaznik = polaznici.find(p => p.sifra === parseInt(sifra));
    return {success: true,  data: polaznik };
}

// 2/4 Create - dodaj novi
async function dodaj(polaznik) {
    const polaznici = dohvatiSveIzStorage();
    
    if (polaznici.length === 0) {
        polaznik.sifra = 1;
    } else {
        // Pronalaženje najveće šifre da izbjegnemo duplikate
        const maxSifra = Math.max(...polaznici.map(p => p.sifra));
        polaznik.sifra = maxSifra + 1;
    }
    
    polaznici.push(polaznik);
    spremiUStorage(polaznici);
    return { data: polaznik };
}

// 3/4 Update - promjeni postojeći
async function promjeni(sifra, polaznik) {
    const polaznici = dohvatiSveIzStorage();
    const index = polaznici.findIndex(p => p.sifra === parseInt(sifra));
    
    if (index !== -1) {
        polaznici[index] = { ...polaznici[index], ...polaznik };
        spremiUStorage(polaznici);
    }
    return { data: polaznici[index] };
}

// 4/4 Delete - obriši
async function obrisi(sifra) {
    let polaznici = dohvatiSveIzStorage();
    polaznici = polaznici.filter(p => p.sifra !== parseInt(sifra));
    spremiUStorage(polaznici);
    return { message: 'Obrisano' };
}

export default {
    get,
    dodaj,
    getBySifra,
    promjeni,
    obrisi
};
