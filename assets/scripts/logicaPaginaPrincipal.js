var audio;

function reproducirMusica(enlace) {
    var cancion = enlace.getAttribute("ruta");
    
    if (!audio || audio.src !== cancion || audio.paused) {
        if (audio) {
            audio.pause();
        }
        
        audio = new Audio(cancion);
        audio.play();
    }
}