// switch je višestruko grananje
// sve što može switch može i if
// switch radi s svim tipovima podataka
const ocjena = 3;

switch(ocjena){
    case 1:
        console.log('Nedovoljan');
        break;
    case 2:
        console.log('Dovoljan');
        break;
    case 3:
        console.log('Dobar');
        break;
    case 4:
        console.log('Vrlo dobar');
        break;
    case 5:
        console.log('Izvrstan');
        break;
    default:
        console.log('Nije broj');
}
