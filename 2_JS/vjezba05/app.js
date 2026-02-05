// switch je visestruko grananje
// sve sto moze switch moze i if
// switch radi sa svim tipovima podataka

const ocjena = 4;

switch (ocjena) {
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