$(document).foundation();

// u $() dolazi css selektor
// .click je jedna od 1000 mogućnosti koje jQuery nudi
// u click () dolazi funkcija
$('#promjeniNaslov').click(function(){
    console.log('Kliknuo sam Simple button');
    $('#naslov').text('Dobrodošli');
    // spriječiti zadano ponašanje elementa
    return false;
});


$('#sakrijKomponente').click(()=>{
    console.log('može arrow function');
    $('#komponente').hide();
    return false;
});


$('#pokaziKomponente').dblclick(()=>{
    $('#komponente').show();
});

$('#oblikujNaslov').click(()=>{
    $('#naslov').css('color','red');
    $('#naslov').css('text-decoration','underline');
    $('#naslov').after('<hr />');
    return false;
});

const boja = 'rgb(214.8186602871, 235.9894736842, 250.0313397129)';

$('.callout.primary').mouseover(function(){
    // $(this) je onaj na kojem si trenutno
    $(this).css('background-color','#eee');
});

$('.callout.primary').mouseout(function(){
    // $(this) je onaj na kojem si trenutno
    $(this).css('background-color',boja);
});

$('#unos').keyup(function(e){
    if(e.key==='b' || e.key==='B'){
        $('p').css('color','red');
    }

    if(e.key==='r' || e.key==='R'){
        $('p').css('color','black');
    }
});