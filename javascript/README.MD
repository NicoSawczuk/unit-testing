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
2. Declarar la función `test()` que contendrá: 
    1. **Arrange:** Lo que debe hacer el test y las propiedades, por ejemplo `const a = 1; const b = 2; const res = 3`
    2. **Act:** La función en si misma
    3. **Asert:** Lo que se espera del test, por ejemplo `expect(sum(a,b)).toBe(res)`

    Ejemplo  
    ```
    const a = 1
    const b = 2
    const res = 3
    test('Suma de dos numeros', () => {
        expect(sum(a,b)).toBe(res)
    })
    ```



