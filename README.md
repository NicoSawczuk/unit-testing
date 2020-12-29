# Introducción

Este repositorio fue creado con el fin de conocer el proceso de unit testing y aplicarlo en los diferentes lenguajes de programación existentes.

# Pruebas unitarias

**Las pruebas unitarias** son trozos de código diseñados para comprobar que el código principal está funcionando como esperábamos y se logran a partis de pequeños test para cubrir diferentes requisitos de codigos y comprobar sus resultados.

## Proceso de Unit Testing (Las 3 A's)

El proceso que se lleva a cabo consta de tres partes:

- **Arrange (organizar):** donde se definen los requisitos que debe cumplir el código principal. Donde también se setean valores por defectos si la funcion principal a testear hace un llamado a otras.
- **Act (actuar):** el proceso de creación, donde vamos ejecutando el test y acumulando los resultados que analizaremos.
- **Asert (afirmar):** se considera el momento en que comprobamos si los resultados agrupados son correctos o incorrectos, es decir, si son los que se esperaban. Dependiendo del resultado, se valida y continúa, o se repara, de forma que el error desaparezca.

## Buenas prácticas para los tests unitarios

* **La prueba unitaria debe probar solamente una cosa:** se debe validar solamente una funcionalidad o modulo y no intentar validar varias cosas con una sola prueba unitaria.
* **Las pruebas unitarias deberían ser independientes:** si se produce cualquier tipo de mejora o cambio en los requerimientos, las pruebas unitarias no deberían verse afectadas.
* **Cualquier cambio necesita ser testeado:** en el caso de producirse un cambio en el código de cualquier módulo, se debe comprobar que exista una prueba unitaria que se corresponda con ese módulo y que este pasa las pruebas antes de cambiar la implementación.
* **Resultado consistente:** las pruebas unitarias deben ser tan confiables que nos deben garantizar que lo que se prueba está en realidad hecho correctamente.
* **Pruebas unitarias aisladas:** la prueba unitaria no puede depender de otras pruebas o de la intervención de otro agente externo a la prueba, debe tener un alcance de método o función por ejemplo y no requerir otro tipo de dependencias.
* **Repetible, automatizada y reconocible:** se debe poder ejecutar las veces que sea necesario, no requieren intervención humana y en el caso de producir fallos, estos deben ser facilmente reconocibles.
