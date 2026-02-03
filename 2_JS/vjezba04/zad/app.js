const rezultat = document.getElementById('rezultat');

document.getElementById('izvedi').addEventListener('click', () => {
  rezultat.innerHTML = '';

  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const c = document.getElementById('c').value;
  const d = document.getElementById('d').value;
  const zadatak = document.getElementById('zadatak').value;

  // -----------------------
  // ZADATAK 1
  // -----------------------
  if (zadatak === '1') {
    const x = Number(a);
    const y = Number(b);

    // Provjera da li su brojevi
    if (isNaN(x)) {
      rezultat.innerHTML = 'A nije broj';
      return;
    }

    if (isNaN(y)) {
      rezultat.innerHTML = 'B nije broj';
      return;
    }

    // Usporedba
    if (x > y) {
      rezultat.innerHTML = x;
    } else if (y > x) {
      rezultat.innerHTML = y;
    } else {
      rezultat.innerHTML = 'A i B su isti';
    }

    return; // short-circuiting
  }

  // -----------------------
  // ZADATAK 2
  // -----------------------
  if (zadatak === '2') {
    const x = Number(a);
    const y = Number(b);
    const z = Number(c);

    // Provjera brojeva
    if (isNaN(x)) {
      rezultat.innerHTML = 'A nije broj';
      return;
    }
    if (isNaN(y)) {
      rezultat.innerHTML = 'B nije broj';
      return;
    }
    if (isNaN(z)) {
      rezultat.innerHTML = 'C nije broj';
      return;
    }

    // Najmanji broj
    if (x <= y && x <= z) {
      rezultat.innerHTML = x;
    } else if (y <= x && y <= z) {
      rezultat.innerHTML = y;
    } else {
      rezultat.innerHTML = z;
    }

    return;
  }

  // zadatak 3

  if (zadatak === '3') {
    const x = Number(a);
    const y = Number(b);
    const z = Number(c);
    const w = Number(d);

    if (isNaN(x)) {
      rezultat.innerHTML = 'A nije broj';
      return;
    }
    if (isNaN(y)) {
      rezultat.innerHTML = 'B nije broj'
      return;
    }
    if (isNaN(z)) {
      rezultat.innerHTML = 'C nije broj'
      return;
    }
    if (isNaN(w)) {
      rezultat.innerHTML = 'D nije broj'
      return;
    }

    rezultat.innerHTML = x + y + z + w;

    //    rezultat.innerHTML = a + b + c + d ( ovdje spaja stringove ) 

    return;
  }

  //-------------------
  //  4 Zadatak
  //-------------------

  // Korisnik unosi godinu rodjenja u polje A
  // Izracunaj njegovu dob u odnosu na tekucu godinu i ispisi dali je punoljetan

  if (zadatak === '4') {
    const x = Number(a)

    if (isNaN(x)) {
      rezultat.innerHTML = 'Niste unjeli ispravan broj ili znak. molimo unesite broj'
      return;
    }
    if (x < 18) {
      rezultat.innerHTML = 'Maloljetni ste'
      return;
    } else if (x >= 18) {
      rezultat.innerHTML = 'Punoljetni ste'
      return;
    }
  }



  // -----------------------
  // Nepoznati zadatak
  // -----------------------
  rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
});
