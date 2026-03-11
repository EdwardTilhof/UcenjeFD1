export const PI=3.14 // iz ove datoteke moguće je napraviti import varijable

export function zbroji(i,j){ // iz ove datoteke moguće je napraviti import funkcije
    return i+j
}

export default function pozdrav(ime){ // ovo je zadana funkcija iz ove datoteke
    return `Hello ${ime}, pozvao si default funkciju`
}

function prva(){
    return `Ovo vidim jer sam pozvao u app.js, ${druga()}`
}


function druga(){
    return 'Ovo je druga funkcija'
}

export {prva} // ovdje se navode funkcije koje će se exportati