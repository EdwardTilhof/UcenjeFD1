import { polaznici } from "./PolaznikPodaci";


// 1/4 Read od CRUD
async function get(){
    return {success: true, data: [...polaznici]} // [...] stvara novi niz s istim podacima
}

async function getBySifra(sifra) {
    return {success: true, data: polaznici.find(p => p.sifra === parseInt(sifra))}
}

// 2/4 Create od CRUD
async function dodaj(polaznik){
    if(polaznici.length===0){
        polaznik.sifra=1
    }else{
        polaznik.sifra = polaznici[polaznici.length - 1].sifra + 1
    }
    
    polaznici.push(polaznik)
}

// 3/4 Update od CRUD
async function promjeni(sifra,polaznik) {
    const index = nadiIndex(sifra)
    polaznici[index] = {...polaznici[index], ...polaznik}
}

function nadiIndex(sifra){
    return polaznici.findIndex(p=>p.sifra === parseInt(sifra))
}

// 4/4 Delete od CRUD
async function obrisi(sifra) {
    const index = nadiIndex(sifra);
    if (index > -1) {
        polaznici.splice(index, 1);
    }
    return;
}


export default{
    get,
    dodaj,
    getBySifra,
    promjeni,
    obrisi
}
