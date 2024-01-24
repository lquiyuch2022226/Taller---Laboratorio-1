let numIng = 1;

function cambiarImagen(cambio) {
    numIng = (numIng + cambio + 2) % 3 + 1;

    for (let i = 1; i <= 3; i++) {
        document.getElementById(`imagen${i}`).classList.remove('imagen_actual');
    }

    document.getElementById(`imagen${numIng}`).classList.add('imagen_actual');
}