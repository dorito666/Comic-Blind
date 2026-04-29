let visualizador = document.getElementById("paginas12");
let anteriorBTN = document.getElementById("anteriorBTN");
let siguienteBTN = document.getElementById("siguienteBTN");
let ventana = document.getElementById("ventana");

let numeros = [
    "./Grafico/Lau/Laucomic1.jpg", 
    "./Grafico/Lau/Laucomic2.jpg", 
    "./Grafico/Lau/Laucomic3.jpg", 
    "./Grafico/Lau/Laucomic4.jpg"
    
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