console.log(`Edunova`);
console.log(`Edunova`);
console.log(`Edunova`);
console.log(`Edunova`);
console.log(`Edunova`);
console.log(`Edunova`);
console.log(`Edunova`);
console.log(`Edunova`);
console.log(`Edunova`);
console.log(`Edunova`);

const text = `Edunova`;

for (let i = 0; i < 10; i++) {
    console.log(text);
}

console.log("=========================");

for (let i = 0; i < 10; i++) console.log(`Edunova`);

console.log("=========================");

for (let i = 0; i < 10; i++) {
    console.log(`Vrijednost i je ${i}`);
}
let suma = 0;
for (let i = 0; i < 10; i++) {
    console.log(`${suma} + ${i + 1} = `);
    suma += i + 1;
    console.log(suma);
}
console.log(`suma`, suma);

console.log("=========================");


for (let i = 0; i < 10; i++) {
    if (i === 3) {
        continue;
    }
    if (i === 7) {
        break;
    }
    console.log(i);
}


for(let i=0; i<10; i++){
    for(let j=0; j<10; j++){
        console.log((i+1) * (j+1));
        
    }
}

const niz = [2,3,45,5,6];

for(let i=0;i<niz.length-1;i++){
    console.log(niz[i]);
}
const ime = `Marko`;
for(let i=0;i<ime.length;i++){
    console.log(ime[i]);
}

