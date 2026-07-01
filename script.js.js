// Fecha de aniversario: 4 de Enero de 2025 (Año, Mes [0-11], Día)
// En JavaScript, Enero es el mes 0, Febrero el 1, etc. Por eso se pone 0 para Enero.
const fechaAniversario = new Date(2025, 0, 4, 0, 0, 0); 

function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - fechaAniversario;

    // Cálculos matemáticos de tiempo
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Insertar el texto en la página
    document.getElementById("contador").innerHTML = 
        `${dias} días, <br>` +
        `${horas} horas, ${minutos} minutos <br> y ${segundos} segundos`;
}

// Ejecutar el contador cada segundo automáticamente
setInterval(actualizarContador, 1000);
actualizarContador();

// Función para el botón interactivo
function mostrarMensaje() {
    const mensaje = document.getElementById("mensaje-oculto");
    if (mensaje.style.display === "block") {
        mensaje.style.display = "none";
    } else {
        mensaje.style.display = "block";
    }
}