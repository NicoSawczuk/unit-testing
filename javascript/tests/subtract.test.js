const subtract = require('../funciones/subtract')

describe("subtract", () => {
    it('La resta de 3 - 1 deberia dar 2', () => {
        expect(subtract(3,1)).toBe(2)
    })

    it('La resta de -3 - 1 deberia dar -4', () => {
        expect(subtract(-3,1)).toBe(-4)
    })
})