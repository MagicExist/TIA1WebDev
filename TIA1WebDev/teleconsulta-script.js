/**
 *  Colocar aquí el equipo y sus integrantes
 */


/**
 *  Manejo de previsualización de imágenes
 */ 
document.getElementById('fotoPaciente').addEventListener('change', function(event) {
    mostrarImagen(event, 'previewPaciente');
});

/**
 * Evento de previsualización de foto del Médico
 */
document.getElementById('fotoDoctor').addEventListener('change', function(event) {
    mostrarImagen(event, 'previewDoctor');
});


/**
 * Carga inicial del Formulario
 */
document.addEventListener("DOMContentLoaded", function () {
    // Ruta de la imagen y el audio dentro de la misma carpeta
    const imagenPaciente   = "imgPaciente.jpg";  // Nombre de la imagen en la misma carpeta
    const imagenDoctor     = "imgDoctor.jpg";    // Nombre de la imagen en la misma carpeta
    const audioDiagnostico = "AudioEjercicio.mp3";    // Nombre del audio en la misma carpeta

    // Cargar imagen del paciente automáticamente
    const imgPaciente = document.getElementById("previewPaciente");
    imgPaciente.src = imagenPaciente;
    imgPaciente.alt = "Foto del Paciente";

    const imgDoctor = document.getElementById("previewDoctor");
    imgDoctor.src = imagenDoctor;
    imgDoctor.alt = "Foto del Doctor";

    // Cargar y reproducir el audio automáticamente
    const audioPlayer = document.getElementById("audioPlayback");
    audioPlayer.src = audioDiagnostico;
    audioPlayer.controls = true; // Muestra los controles de reproducción
});



/**
 * 
 *  Función para mostrar imagen de paciente o doctor
 */
function mostrarImagen(event, previewId) {
    const archivo = event.target.files[0];
    if (archivo) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById(previewId).src = e.target.result;
        };
        reader.readAsDataURL(archivo);
    }
}


/** Botón de envío del foormulario */
const boton = document.getElementById("miBoton");
const idPaciente = document.getElementById("identificacionPaciente")
const idDoctor = document.getElementById("identificacionDoctor")



/** 
 *  Acción de envio del formulario al Servidor (simulación)
 */
boton.addEventListener("click", function() {
    const datos_ok = false;

    /** 
     * Validar mínimo 2 campos que no estén vacíos. 
    /


    /** Decisión: Utilizar un condicional (lógico)
     *  1.- Si los campos están llenos, simular envío con mensaje exitoso 
     *  2.- Si alguno de los 2 campos no tiene información, enviar aviso de alarma
     */
    if(idPaciente.value == "" && idPaciente.value == ""){
        alert("Porfavor llena todos los campos")
    }
    else{
        alert("Consulta Guardada!!"); 
    }
});


