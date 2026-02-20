

// rekurzija - kada funkcija zove samu sebe uz uvijet prekida rekurzije

// ono što znamo
// zbroji prvih 100 brojeva
let sum=0;
for(let i=1;i<=100;i++){
    sum+=i;
}
console.log(sum);

function zbroji(broj){
    //uvjet prekida rekurzije
    if(broj===1){
        return 1;
    }
    return broj + zbroji(broj-1); // funkcija u sebi zove samu sebe
}

console.log(zbroji(100));


// stackoverflow

function so(){
    so();
}

so();