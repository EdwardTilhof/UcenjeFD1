
const isDev=true;

// funkcija je skup naredbi s određenom svrhom, koji ćemo više puta pozivati => DRY

// osnovne vrste funkcija

// poziv funkcije koji je u kodu "prije definicije funcije"
pozdraviSvijet();

// 1. ne prima vrijednost, ne vraća vrijednost
// definiranje funckije
function pozdraviSvijet(){ // ona je tipa void
    console.log('Hello world');
    // return; može i ne mora se napisati
}

// poziv funkcije
pozdraviSvijet();


// 2. prima parametre, ne vraća vrijednost
// definiranje funkcije
function parniBrojevi(odBroja,doBroja){ // parametri se odvajaju zarezom, u ovom primjeru su varijable
    const max = odBroja>doBroja ? odBroja : doBroja;
    const min = odBroja<doBroja ? odBroja : doBroja
    for(let i=min;i<=max;i++){
        if(i % 2 === 0){
            console.log(i);
        }
    }
}

//poziv funkcije
log('Prvi poziv')
parniBrojevi(3,8);
log('Drugi poziv')
parniBrojevi(59,65);
log('Treći poziv');
parniBrojevi(12,7);

function log(poruka){
    if(!isDev){
        return;
    }
    console.log('----------------------');
    console.log(poruka);
    console.log('----------------------')
}

// 3. ne prima parametre, vraća vrijednost
// definiranje funkcije
function slucajniBroj(){ // ona je tipa number
    const broj = Math.random();
    log(broj);
    const uvecano = broj * 1000;
    const intb = parseInt(uvecano)
    return intb; // ovo je vraćanje vrijednost
}

// i funkciju koja vraća vrijednost može pozvati bez da ju dodjelimo nekome/nečemu
slucajniBroj();

// "ispravan" način poziva funkcije koja vraća vrijednost
const sb = slucajniBroj();
log(sb);
// slučajni broj načini
console.log((Math.random()*1000).toFixed(0)); // slučajni broj od 100 do 999
console.log((Math.random() * (58-22) + 22).toFixed(0)); // ovo je slučajni broj od 22 do 58

// 4. prima parametre, vraća vrijednost  ---> NAJČEŠĆE KORIŠTEN
// definiranje funkcije
function zbrojPrimBrojeva(odBroja, doBroja){
    let suma=0, prim=true;
    for(let i=odBroja; i<=doBroja;i++){
        prim=true;
        for(let j=2;j<i;j++){
            if(i % j === 0){
                prim=false;
                break;
            }
        }
        if(prim){
            suma += i;
        }
    }
    return suma;
}

// korištenje
log(zbrojPrimBrojeva(3,80));

// pozdravArrow(); -> ovo ne radi prije deklariranja funkcije zato što je arrow funkcija

// arrow funkcija
const pozdravArrow = () => console.log('Hello Arrow'); // vjerovali ili ne ovo je funkcija

pozdravArrow();

// funkcija u objektu

const brojevi={
    slucajniBroj: () => {
        // tu bi došao kod koji imam u funkciji slucajniBroj
        return 7;
    },
    nula: () =>{return 0}
}

log(brojevi['slucajniBroj']());