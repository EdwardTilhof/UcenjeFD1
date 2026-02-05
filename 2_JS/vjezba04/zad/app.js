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
// ZADATAK 5
// -----------------------

if (zadatak === '5') {
  console.log('Rjesavam zadatak 5');

  const x = Number(a);
  const y = Number(b);
  const z = Number(c);
  const zz = Number(d);

  if (isNaN(x) || isNaN(y) || isNaN(z) || isNaN(zz)) {
    rezultat.innerHTML = 'Niste unjeli broj.';
    return;
  }

  const biggerXY = x > y ? x : y;
  const biggerZZZ = z > zz ? z : zz;

  const sum = biggerXY + biggerZZZ;

  // ✅ FIX: backticks
  rezultat.innerHTML = `Rezultat je: ${sum}`;
  return;
}

// -----------------------
// ZADATAK 6
// -----------------------

if (zadatak === '6') {
  console.log('Rjesavam zadatak 6');

  const zz = Number(d);

  if (a !== '' || b !== '' || c !== '') {
    rezultat.innerHTML =
      'Unijeli ste podatke u polja A, B ili C. Molimo ostavite ih prazna.';
    return;
  }
   if (isNaN(zz)) {
    rezultat.innerHTML = 'Niste unjeli broj u polje D.';
    return;
  }
const sum = zz * 10

rezultat.innerHTML = `Rezultat je: ${sum}`;
return;
}

// -----------------------
// ZADATAK 7
// -----------------------
if (zadatak === '7') {
  console.log('Rjesavam zadatak 7');

  const adresaEdunova = 'Osijek';

  if (a !== '' || c !== '' || d !== '') {
    rezultat.innerHTML =
      'Unijeli ste podatke u polja A, C ili D. Molimo ostavite ih prazna.';
    return;
  }

  if (b === '') {
    rezultat.innerHTML = 'Molimo unesite adresu u polje B.';
    return;
  }

  if (b !== adresaEdunova) {
    rezultat.innerHTML = 'Niste unijeli ispravnu adresu.';
    return;
  }

  rezultat.innerHTML = 'Unijeli ste pravu adresu.';
  return;
}

// -----------------------
// ZADATAK 7
// -----------------------

if (zadatak === '8') {
  console.log('Rjesavam zadatak 8');

  const x = a;
  const y = b;
  
  if (c !== '' || d !== ''){
    rezultat.innerHTML = 'Unjeli ste podatke u polja C i D. Polja C i D moraju ostati prazna'
    return;
  }
  if (x === '') {
    rezultat.innerHTML = 'Molimo unesite podatke u polje A';
    return;
  }
   if (y === '') {
    rezultat.innerHTML = 'Molimo unesite podatke u polje B';
    return;
  }

  rezultat.innerHTML = `unjeli ste ${x} i ${y} te ste dobili ${x+y}`;
  return;
}

// -----------------------
// ZADATAK 7
// -----------------------

if (zadatak === '9') {
  console.log('Rjesavam zadatak broj 9');

  const x = Number(a)
  const zz = Number(d)

  if (b !== '' || c !== ''){
    rezultat.innerHTML = 'Polja B i C trebaju ostat prazna';
    return;
  }
  if (isNaN(x) || isNaN(zz)) {
    rezultat.innerHTML = 'Polja A i D mogu jedino imati brojeve. Molimo ne upisivati znakove ili prazna polja'
  return;
  }

  const sum = x * zz
  rezultat.innerHTML = `Unjeli ste brojeve A = ${x} i D = ${zz} te je umnozak ${sum}`
  return;
}


  // -----------------------
  // Nepoznati zadatak
  // -----------------------
  rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
});
