let visualizador = document.getElementById("paginas8");
let anteriorBTN = document.getElementById("anteriorBTN");
let siguienteBTN = document.getElementById("siguienteBTN");
let ventana = document.getElementById("ventana");

let numeros = [
    "./grafico/Gaby/Gaby1.jpg", 
    "./grafico/Gaby/Gaby2.jpg", 
    "./grafico/Gaby/Gaby3.jpg", 
    "./grafico/Gaby/Gaby4.jpg", 
    "./grafico/Gaby/Gaby5.jpg", 
    "./grafico/Gaby/Gaby6.jpg"
    
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