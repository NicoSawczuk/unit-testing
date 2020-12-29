# Pruebas unitarias en JavaScript

Las pruebas unitarias en JavaScript se realizaron con **jest**

## Convenciones

Los archivos en los cuales se van a realizar las pruebas deben nombrarse como `{nombre_archivo}.test.js`

## Procedimientos a realizar en el test
1. Primeramente se debe importar la funcion o modulo a testear  
    Ejemplo  
    ```
    const sum = require('../funciones/sum')
    ```
2. **Primera forma:** realizar el test  
    Declarar la función `test()` que contendrá: 
    1. **Arrange:** Lo que debe hacer el test y las propiedades a través de `test()`, por ejemplo: `test('Suma de 1 + 2 deberia dar 3', () => {})`
    2. **Act:** La función en si misma
    3. **Asert:** Lo que se espera del test, por ejemplo `expect(sum(1,2)).toBe(3)`

    Ejemplo  
    ```
    test('Suma de 1 + 2 deberia dar 3', () => {
        expect(sum(1,2)).toBe(3)
    })
    ```
3. **Segunda forma:** realizar el test  
    Declarar una funcion `describe()` que sera referido a la función a testear, ejemplo: `describe("subtract", () => {})`, luego dentro de la función:
    1. **Arrange:** Lo que debe hacer el test y las propiedades a través de `it()`, por ejemplo: `it('La resta de 3 - 1 deberia dar 2', () => {})`
    2. **Act:** La función en si misma
    3. **Asert:** Lo que se espera del test, por ejemplo `expect(subtract(3,1)).toBe(2)`


    Ejemplo
    ```
    describe("subtract", () => {
        it('La resta de 3 - 1 deberia dar 2', () => {
            expect(subtract(3,1)).toBe(2)
        })

        it('La resta de -3 - 1 deberia dar -4', () => {
            expect(subtract(-3,1)).toBe(-4)
        })
    })
    ```



