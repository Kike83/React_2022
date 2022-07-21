
Módulo de React




Qué es React?
- yo: "Una biblioteca de JavaScript para construir interfaces de usuario"
- lo saqué de URL: https://es.reactjs.org/)
- Isra:
    Librería 

Datos primitivos en JavaScript
- string
- Boolean
- array
- number
- object



let name = "Kike"

* Strings
- length
- métodos
- index



* Booleanos
- truthy & falsy
nos traen true or false al evaluar con un operador lógico 
    - se que en Platzi lo vi



Promesas
- qué son?
-> yo: una garantía a futuro de que una función nos va a traer un return
    - lo saqué de URL: https://www.freecodecamp.org/espanol/news/promesas-en-javascript-es6/)



* falsy:
todos los valores que dan = false
- undefined
- 0
- null
- NaN
- ""    ->un string vacío

* number



* objetos
- propiedades
    - características que define el objeto
- valores
    - aquello que define la característica del objeto
    - Ej: nombre, 
    - que se defina a través de una 
- métodos
    - son acciones que los objetos pueden realizar



Cada objeto tiene:
propiedad:name
valor:"Kike"
método: como charAt()



{
name:"Kike"
}


let myObject = {
    name:"Kike",
    greeting: () => alert("hola koders")
}


- todo es un objeto en JavaScript

- Qué es un método

- CLASE
    -> es un MOLDE del que derivan los demás objetos

- String
- un objeto con posiciones



8:38 pm a 8:50 pm
Break


* Arrays 
- 

-métodos:
* forEach
una función por cada elemento del array
no devuelve nada por si solo

* map
- me devuelve un nuevo array, procesados por la función
- me devuelve el mismo número de elementos del array original

* filter
...
...

* reduce
...
...


let numbers = [
    1,
    2,
    3,
    4,
    5,
]

1.- obtener el resultado de la sumatoria total de todos los númerso dentro del array
2.- obtener cada uno de los números de array multiplicado por 3
3.- imp cada uno de los números del array
4.- obtener aquellos números del array que sean pares


para 1.- -> .reduce

let total = numbers.reduce((accum, current, index, array) => accum + current)
console.log( total )

para 2.- -> .map

--> para React vamos a usar mucho .map
      y no tanto .reduce


let result = numbers.map((number, index, array) => number * 3)
console.log( result )


para 3.- -> .forEach
numbers.forEach((number, index, arr) => console.log(number))

para 3.- -> .filter
por la condición


let evens = numbers.filter((number, index, array) => )
console.log( evens )

--> esta es una prueba Junior
    wwwwwoooooooowwwwww



REACT
- les presento a su mejor amiga en React:
    - Documentación URL: https://es.reactjs.org/
- libreria de JavaScript
- trabaja con Node
- se instala:
    create react app


