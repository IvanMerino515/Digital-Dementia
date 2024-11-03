// Seleccionar la imagen del GIF
const draggableMono = document.getElementById('draggable-mono');

// Variables para manejar el intervalo y el seguimiento del cursor
let cloneInterval;
let cursorPosition = { x: 0, y: 0 };

// Actualiza la posición del cursor cuando se mueve
document.addEventListener('mousemove', (e) => {
    cursorPosition.x = e.pageX;
    cursorPosition.y = e.pageY;
});

// Función para crear clones en la posición del cursor
function createCloneAtCursor() {
    const clone = draggableMono.cloneNode(true);
    clone.classList.add('clone');
    
    // Posicionar el clon en la ubicación actual del cursor
    clone.style.left = `${cursorPosition.x}px`;
    clone.style.top = `${cursorPosition.y}px`;

    // Añadir el clon al cuerpo del documento
    document.body.appendChild(clone);

    // Eliminar el clon después de un tiempo
    setTimeout(() => {
        clone.remove();
    }, 1000); // Los clones se eliminan después de 1 segundo
}

// Función que inicia la estela de clones cuando el ratón sale de la imagen
function startCloneTrail() {
    // Crear clones cada 100ms para simular la estela
    cloneInterval = setInterval(createCloneAtCursor, 4);

    // Detener la estela después de 1 segundo
    setTimeout(() => {
        clearInterval(cloneInterval);
    }, 1000); // Duración de la estela
}

// Evento que detecta cuando el ratón sale de la imagen y activa la estela
draggableMono.addEventListener('mouseleave', startCloneTrail);

// Seleccionar los botones de activación y desactivación
const dementiaModeOn = document.querySelector('.dementia-mode-on');
const dementiaModeOff = document.querySelector('.dementia-mode-off');

// Función para activar el modo oscuro
dementiaModeOn.addEventListener('click', () => {
    document.body.classList.add('dark-mode');

    // Añadir subrayado a "ON" y quitar de "OFF"
    dementiaModeOn.classList.add('active');
    dementiaModeOff.classList.remove('active');
});

// Función para desactivar el modo oscuro
dementiaModeOff.addEventListener('click', () => {
    document.body.classList.remove('dark-mode');

    // Añadir subrayado a "OFF" y quitar de "ON"
    dementiaModeOff.classList.add('active');
    dementiaModeOn.classList.remove('active');
});

