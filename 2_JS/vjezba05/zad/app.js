
const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {
  rezultat.innerHTML = '';
  const a = document.getElementById('a').value;
  const zadatak = document.getElementById('zadatak').value;

  switch (zadatak) {
    case '1':
      // rješavanje 1. zadatak

      // kraj rješavanje 1. zadatak
    break;
    case '2':
      // rješavanje 2. zadatak

      // kraj rješavanje 2. zadatak
    break;
    case '3':
      // rješavanje 3. zadatak

      // kraj rješavanje 3. zadatak
    break;
    case '4':

    // Ulaz 3.14       izlaz 14

    const x = parseFloat(a)
    if(!x){
      rezultat.innerHTML='Niste unjeli dobru vrijednost'
    return;
    }
    const cijeliBroj = parseInt(a)
    const sum = x - cijeliBroj
    rezultat.innerHTML = parseInt((x-cijeliBroj)*100)   

    break;

    case '5':

    const y = Number(a)
    if(!y){
      rezultat.innerHTML='Niste unjeli broj'
      return;
    }
    if (y%2===0){
      rezultat.innerHTML = 'Paran'
    } else {
      rezultat.innerHTML = 'Neparan'
    }

    break

    case '6':

    switch (a.toLowerCase()){
      case 'jabuka':
      case 'kruska':
      case 'banana':
        rezultat.innerHTML = 'Voce je'
        break;
        default:
          rezultat.innerHTML = 'Nemamo informacije dali je voce ili nije'
    } 

    break;

    case '7':

    rezultat.innerHTML = "Broj znakova: " + a.length;

    break;
    default:
      rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
  }

});


// Zadaci

// 1. zadatak
// Napiši program koji prima string komandu ("start", "stop", "pauza") i ispisuje odgovarajuću poruku.
// Primjer ulaza: "pause"
// Ispis: "Pauza programa"

// 2. zadatak
// Napiši program koji prima ocjenu ("A", "B", "C", "D", "F") i ispisuje:
// "Položio" za "A", "B", "C"
// "Nije položio" za "D" i "F"

// 3. zadatak
// Napiši program koji prima broj bodova (0–100) i ispisuje ocjenu:
// < 50 → "Nedovoljan"
// 50–64 → "Dovoljan"
// 65–79 → "Dobar"
// 80–89 → "Vrlo dobar"
// 90–100 → "Odličan"
// Napomena: koristi switch(true).

