


// URL: https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript

const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
    let name = prompt('Enter a new name');
    para.textContent = 'Player 1: ' + name;
}




/*
Aquí 
- seleccionamos un párrafo de texto (línea 1), 
- luego adjuntamos un detector de eventos (línea 3) de modo que cuando se hace clic en el párrafo, el bloque de código updateName() (líneas 5-8) se ejecuta. 
El bloque de código updateName() (líneas 5-8)
(estos tipos de bloques de código reutilizables se denominan "funciones") 
pide al usuario un nuevo nombre y luego inserta ese nombre en el párrafo para actualizar la pantalla.
*/







// Forma 2

const inputHandler = (event) => {
    console.log(event.target.value)
}


document.getElementById("sample").addEventListener('change', inputHandler)


/*
Forma 1 
    // y funciona


document.getElementById("sample").addEventListener('change', (event) => {
    console.log(event.target.value)
})

*/






