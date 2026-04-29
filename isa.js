let visualizador = document.getElementById("paginas10");
let anteriorBTN = document.getElementById("anteriorBTN");
let siguienteBTN = document.getElementById("siguienteBTN");
let ventana = document.getElementById("ventana");

let numeros = [
    "./Grafico/Isa/Comic-portada1.jpg", 
    "./Grafico/Isa/Compañia_Inesperada_1.jpg", 
    "./Grafico/Isa/Compañia_Inesperada_2.jpg", 
    "./Grafico/Isa/Compañia_Inesperada_3.jpg" 
    
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