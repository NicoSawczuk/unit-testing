// 1. Importamos la función a testear
const sum = require('../funciones/sum')

//El String que recibe test es lo que debe hacer el test
test('Suma de 1 + 2 tiene que dar 3', () => {
    expect(sum(1,2)).toBe(3)
})