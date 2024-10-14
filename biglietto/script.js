

//PRENDO IN INPUT I KM DA PERCORRERE E LI VALIDO
const km = parseInt(prompt("Inserisci i kilometri da percorrere"));
const kmValid = !isNaN(km) && km > 0 ;
if(!kmValid){
    alert("Kilometri errati")
}

//PRENDO IN INPUT L'èTA DA PERCORRERE E LI VALIDO
const age = parseInt(prompt("Inserisci la tua età"));
const ageValid = !isNaN(age) && age > 0 ;
if(!ageValid){
    alert("Età errata")
}


//SE ENTRAMBI SONO CORRETTI ENTRO NELLA VERIFICA DEL PREZZO
if(kmValid && ageValid){

    //CALCOLO IL PREZZO
    let price = parseInt(km) * 0.21;
    let discount = 0;

    //SE è MINORENNE APPLICO UNO SCONTO
    if(age < 18){
        discount = (price/100)*20;
        price = price - discount;
    }

    //SE è OVER 65 APPLICO UNO SCONTO
    if(age >= 65){
        discount = (price/100)*40;
        price = price - discount;
    }

    //TAGLIO LE CIFRE DECIMANI E FACCIO APPARIRE SOLO LE ULTIME DUE
    console.log(price.toFixed(2));

}

else{
    alert("Età o Km errati");
}