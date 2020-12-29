// 1. Importamos la función a testear
const sum = require('../funciones/sum')

//El String que recibe test es lo que debe hacer el test
const a = 1
const b = 2
const res = 3
test('Suma de 1 + 2 tiene que dar 3', () => {
    expect(sum(a,b)).toBe(res)
})