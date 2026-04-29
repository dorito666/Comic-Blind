let visualizador = document.getElementById("paginas1");
let anteriorBTN = document.getElementById("anteriorBTN");
let siguienteBTN = document.getElementById("siguienteBTN");
let ventana = document.getElementById("ventana");

let numeros = [
    "./grafico/Arlette/arlette_PORTADA.jpg", 
    "./grafico/Arlette/arlette_PAG1.jpg", 
    "./grafico/Arlette/arlette_PAG2.jpg", 
    "./grafico/Arlette/arlette_PAG3.jpg", 
    "./grafico/Arlette/arlette_PAG4.jpg"
];

let i = 0;

function siguientePagina(){
    anteriorBTN.disabled = false;
    i++;
    visualizador.src = numeros[i];
    if (i == numeros.length-1){
        siguienteBTN.disabled = true;
    }
}

function anteriorPagina(){
    siguienteBTN.disabled = false;
    i--;
    visualizador.src = numeros[i];
    if(i == 0){
        anteriorBTN.disabled=true;
        siguienteBTN.disabled = false;
    }
}