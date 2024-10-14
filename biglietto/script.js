


const km = parseInt(prompt("Inserisci i kilometri da percorrere"));
const kmValid = !isNaN(km) && km > 0 ;
if(!kmValid){
    alert("Kilometri errati")
}


const age = parseInt(prompt("Inserisci la tua età"));
const ageValid = !isNaN(age) && age > 0 ;
if(!ageValid){
    alert("Età errata")
}



if(kmValid && ageValid){

    let price = parseInt(km) * 0.21;
    let discount = 0;

    if(age < 18){
        discount = (price/100)*20;
        price = price - discount;
    }

    if(age >= 65){
        discount = (price/100)*40;
        price = price - discount;
    }

    console.log(price.toFixed(2));

}

else{
    alert("Età o Km errati");
}