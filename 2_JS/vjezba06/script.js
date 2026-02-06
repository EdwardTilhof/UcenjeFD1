const niz = [];
console.log(niz, niz.length);


const temperature = [-2, 2, 10, 15, 21, 26, 29, 31, 28, 19, 10, 4];
console.log(temperature.length);

console.log('sijecanj', temperature[0]);
const zadnji = temperature.length-1;
console.log('prosinac', temperature[zadnji]);

console.log(temperature);

temperature[2] = 17;
console.log(temperature);

const ptp = [
    'Osijek',
    12,
    {ime: 'Pero'},
    15n,
    [],
    true,
    null,
    undefined,
    Symbol
];
console.log(ptp);

const tablica = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(tablica);

console.log(tablica[1][2]);

tablica[2][0] = 10
console.log(tablica[2][0]);





