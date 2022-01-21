// const { TestWatcher } = require('jest');

const { sum } = require('./miapp.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);

    expect(total).toBe(23);
})

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./miapp.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One dollar should be 153.4 yenes", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./miapp.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(3.5)).toBe(536.9); //1 dollar son 153.4 yenes, entonces 3.5 dolares deberian ser = (3.5 * 153.4)
})

test("One yen should be 102.3 pounds", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./miapp.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(3.5)).toBe(358.05); //1 yen son 102.3 puonds, entonces 3.5 yenes deberian ser = (3.5 * 102.3)
})