// Try catch je mehanizam koji omogućava obradu iznimke (greške)

// kod koji ima grešku
/*
console.log('Početak programa');
const i=7; // ovdje simuliram da je unio korisnik

const rezultat = i + varijabla; // ovo je i očekivano app.js:5 Uncaught ReferenceError: varijabla is not defined

console.log(rezultat);

console.log('Kraj programa');
*/

// obavezna minimalna sintaksa mora imati try catch
try{
    // ovdje je kod koji pokušavam izvesti
    console.log('Početak programa');
    const i = 7;
    const rezultat = i + varijabla;
    console.log(rezultat);
}catch(e){
    console.log('Greška', e.name, e.message, e);
}
 console.log('Kraj programa');

// opcionalna sintaksa ima try catch finally

console.log('Primjer 2');
const i = 7;
let rezultat=0;
try{
    rezultat = i + varijabla; // ovo je puklo ali skripta se nastavila izvoditi dalje
}catch(e){
    rezultat = i + 1; // ovo mi je logika koju sam definiram što se radi ako je greška
}finally{
    console.log(rezultat);
}
console.log('Kraj primjer 2');


// funkcija može baciti iznimku (Error)
function odradiPosao(){
    const i=-5;

    if(i<0){
        throw new Error('Broj mora biti veći ili jednak 0');
    }

    return Math.sqrt(i);
}

try{
    console.log(odradiPosao());
}catch(e){
    console.log(e.message);
}



// koliko puta se rekurzija izvodi

let brojac = 0;

function teskaRekurzija() {
 // let a = 1; let b = 2; let c = 3; let d = 4; let e = 5;
  let f = "Neki dugački string koji zauzima prostor";
  
  brojac++;
  teskaRekurzija();
}

try {
  teskaRekurzija();
} catch { // ne moramo navesti parametar ako ga ne koristimo
  console.log("Stog je pukao na: " + brojac);
}

