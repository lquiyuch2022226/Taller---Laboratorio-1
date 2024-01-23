let img1 = document.getElementById('tonys_1');
let img2 = document.getElementById('tonys_2');
let img3 = document.getElementById('tonys_3');

let numImg = 1;

function cambiarImagen(){
    img1.style.opacity = numImg === 1 ? '1' : 0;
    img2.style.opacity = numImg === 2 ? '2' : 0;
    img3.style.opacity = numImg === 3 ? '3' : 0;

    numImg = numImg === 3 ? 1 : numImg + 1;
}