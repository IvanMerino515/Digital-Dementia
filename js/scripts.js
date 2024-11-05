

// Seleccionar los botones de activación y desactivación
const darkModeOn = document.querySelector('.dark-mode-on');
const darkModeOff = document.querySelector('.dark-mode-off');

// Función para activar el modo oscuro
darkModeOn.addEventListener('click', () => {
    document.body.classList.add('dark-mode');

    // Añadir subrayado a "ON" y quitar de "OFF"
    darkModeOn.classList.add('active');
    darkModeOff.classList.remove('active');
});

// Función para desactivar el modo oscuro
darkModeOff.addEventListener('click', () => {
    document.body.classList.remove('dark-mode');

    // Añadir subrayado a "OFF" y quitar de "ON"
    darkModeOff.classList.add('active');
    darkModeOn.classList.remove('active');
});

// Define el mapeo de vocales a símbolos
const symbolMap = ['#', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '$', '%', '&'];

// Función para reemplazar las vocales con símbolos aleatorios
function replaceVowelsWithSymbols(text) {
    return text.replace(/[aeiouAEIOU]/g, () => {
        return symbolMap[Math.floor(Math.random() * symbolMap.length)];
    });
}

// Función para activar el efecto en los elementos con clase "change"
document.querySelectorAll('.change').forEach(element => {
    const originalText = element.textContent; // Guarda el texto original

    // Evento para cuando el cursor pase sobre el texto
    element.addEventListener('mouseenter', () => {
        element.textContent = replaceVowelsWithSymbols(originalText);
    });

    // Evento para cuando el cursor sale del texto
    element.addEventListener('mouseleave', () => {
        element.textContent = originalText; // Restaura el texto original
    });
});

// POINTER CONTACTO
// Selecciona el elemento que queremos mover
const floatingElement = document.querySelector('.contact');

// Establece la velocidad inicial de movimiento en píxeles
let xSpeed = 1; // Velocidad en el eje X (horizontal)
let ySpeed = 1; // Velocidad en el eje Y (vertical)

// Posición inicial en la esquina superior izquierda
let posX = 0;
let posY = 0;

// Función para mover el elemento
function moveBubble() {
    // Actualiza las posiciones de acuerdo a la velocidad
    posX += xSpeed;
    posY += ySpeed;

    // Verifica si alcanza el borde derecho o izquierdo de la ventana
    if (posX + floatingElement.offsetWidth >= window.innerWidth || posX <= 0) {
        xSpeed *= -1; // Invierte la dirección en el eje X
    }

    // Verifica si alcanza el borde inferior o superior de la ventana
    if (posY + floatingElement.offsetHeight >= window.innerHeight || posY <= 0) {
        ySpeed *= -1; // Invierte la dirección en el eje Y
    }

    // Aplica la nueva posición al elemento
    floatingElement.style.left = `${posX}px`;
    floatingElement.style.top = `${posY}px`;
}

// Establece la posición inicial y el estilo absoluto
floatingElement.style.position = 'absolute';
floatingElement.style.left = '100px';
floatingElement.style.top = '0px';

// Llama a moveBubble cada 20 milisegundos para crear un movimiento lento y constante
setInterval(moveBubble, 20);

// DEMENTIA MODE
// // Selecciona los botones de activación y desactivación del "Dementia Mode"
// const dementiaModeOn = document.querySelector('.dementia-mode-on');
// const dementiaModeOff = document.querySelector('.dementia-mode-off');

// // Lista de colores para el efecto aleatorio
// const colors = ['#FFFF00', '#00FFFF', '#0CFF0A', '#FFFF00', '#FE0000', '#0401FE'];

// // Variable para almacenar el intervalo
// let dementiaInterval;

// // Función para obtener un color aleatorio de la lista
// function getRandomColor() {
//     return colors[Math.floor(Math.random() * colors.length)];
// }

// // Función para aplicar el efecto de color aleatorio
// function applyDementiaModeEffect() {
//     document.querySelectorAll('.dementia-mode-text').forEach(element => {
//         element.style.color = getRandomColor(); // Cambia el color a uno aleatorio
//     });
// }

// // Activar el "Dementia Mode" con el cambio de colores aleatorios
// dementiaModeOn.addEventListener('click', () => {
//     document.body.classList.add('dementia-mode');
//     dementiaModeOn.classList.add('active');
//     dementiaModeOff.classList.remove('active');

//     // Inicia el intervalo para cambiar los colores cada 500 ms
//     dementiaInterval = setInterval(applyDementiaModeEffect, 500);
// });

// // Desactivar el "Dementia Mode" y restaurar el color original
// dementiaModeOff.addEventListener('click', () => {
//     document.body.classList.remove('dementia-mode');
//     dementiaModeOff.classList.add('active');
//     dementiaModeOn.classList.remove('active');

//     // Detiene el cambio de colores
//     clearInterval(dementiaInterval);

//     // Restaura el color original
//     document.querySelectorAll('.dementia-mode-text').forEach(element => {
//         element.style.color = ''; // Elimina el color inline para volver al original
//     });
// });

// Selecciona los botones de activación y desactivación del "Dementia Mode"
const dementiaModeOn = document.querySelector('.dementia-mode-on');
const dementiaModeOff = document.querySelector('.dementia-mode-off');

// Lista de colores para el efecto aleatorio
const colors = ['#FFFF00', '#00FFFF', '#0CFF0A', '#FFFF00', '#FE0000', '#0401FE'];

// Variable para almacenar el intervalo
let dementiaInterval;

// Función para obtener un color aleatorio de la lista
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

// Función para aplicar el efecto de color aleatorio
function applyDementiaModeEffect() {
    // Cambiar color de cada letra en los elementos con la clase "logo"
    document.querySelectorAll('.logo').forEach(element => {
        if (!element.dataset.split) {
            const originalText = element.textContent;
            element.innerHTML = ''; // Limpia el contenido original

            // Crea un span por cada letra
            originalText.split('').forEach(letter => {
                const span = document.createElement('span');
                span.textContent = letter;
                element.appendChild(span);
            });

            // Marca el elemento como "split" para evitar dividirlo de nuevo
            element.dataset.split = true;
        }

        // Cambia el color de cada letra (span) de la clase "logo" a un color aleatorio
        element.querySelectorAll('span').forEach(span => {
            span.style.color = getRandomColor();
        });
    });

    // Cambiar color de cada palabra en los elementos con la clase "dementia-mode-text"
    document.querySelectorAll('.dementia-mode-text').forEach(element => {
        element.style.color = getRandomColor(); // Cambia el color de toda la palabra
    });
}

// Activar el "Dementia Mode" con el cambio de colores aleatorios
dementiaModeOn.addEventListener('click', () => {
    document.body.classList.add('dementia-mode');
    dementiaModeOn.classList.add('active');
    dementiaModeOff.classList.remove('active');

    // Inicia el intervalo para cambiar los colores cada 500 ms
    dementiaInterval = setInterval(applyDementiaModeEffect, 500);
});

// Desactivar el "Dementia Mode" y restaurar el color original
dementiaModeOff.addEventListener('click', () => {
    document.body.classList.remove('dementia-mode');
    dementiaModeOff.classList.add('active');
    dementiaModeOn.classList.remove('active');

    // Detiene el cambio de colores
    clearInterval(dementiaInterval);

    // Restaura el color original de los elementos con la clase "dementia-mode-text"
    document.querySelectorAll('.dementia-mode-text').forEach(element => {
        element.style.color = ''; // Elimina el color inline para volver al original
    });

    // Restaura el texto original de los elementos con la clase "logo"
    document.querySelectorAll('.logo').forEach(element => {
        const originalText = Array.from(element.querySelectorAll('span'))
            .map(span => span.textContent)
            .join('');
        element.innerHTML = originalText; // Restaura el texto sin los colores
        delete element.dataset.split; // Elimina la marca para el próximo uso
    });
});

// Escuchar el evento de movimiento del ratón
document.addEventListener("mousemove", (event) => {
    const mouseCoordinatesDiv = document.querySelector(".mouse-coordinates");
    
    // Actualizar el texto del div con las coordenadas del ratón
    mouseCoordinatesDiv.textContent = `EjeX: ${event.clientX}px EjeY: ${event.clientY}px`;
  });
  