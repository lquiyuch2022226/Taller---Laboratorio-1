function reproducirMusica(enlace){
    var cancion = enlace.getAttribute("data-cancion");
    var audio = new Audio(cancion);
    audio.play();
}