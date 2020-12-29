const cloneArray = require('../funciones/cloneArray')

const array = [1, 2, 3]
test('Clonación de un array', () => {
    expect(cloneArray(array)).toStrictEqual(array)
})