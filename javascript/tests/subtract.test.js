const subtract = require('../funciones/subtract')

const a = 3
const b = 1
const res = 2

test('Suma de 3 - 1 tiene que dar 2 ', () => {
    expect(subtract(a, b)).toBe(res)
})