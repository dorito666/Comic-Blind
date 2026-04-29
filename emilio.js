let visualizador = document.getElementById("paginas7");
let anteriorBTN = document.getElementById("anteriorBTN");
let siguienteBTN = document.getElementById("siguienteBTN");
let ventana = document.getElementById("ventana");

let numeros = [
    "./grafico/Emilio/PORTADA Emiliojpg", 
    "./grafico/Emilio/pagina emilio (1).jpg", 
    "./grafico/Emilio/pagina emilio (2).jpg", 
    "./grafico/Emilio/pagina emilio (3).jpg"
    
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