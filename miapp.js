// console.log("Hello World");

const sum = (a, b) => {
    return a + b;
}
console.log(sum(7, 3));


// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a yenes
    let ValueInYen = valueInDollar * 153.4;
    // retornamos el valor
    return ValueInYen;
}

const fromYenToPound = function(valueInYen){
    // convertimos el valor a libras
    let ValueInPound = valueInYen * 102.3;
    // retornamos el valor
    return ValueInPound;
}




module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};
