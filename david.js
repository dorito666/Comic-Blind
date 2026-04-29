let visualizador = document.getElementById("paginas4");
let anteriorBTN = document.getElementById("anteriorBTN");
let siguienteBTN = document.getElementById("siguienteBTN");
let ventana = document.getElementById("ventana");

let numeros = [
    "./grafico/David/David1.jpg", 
    "./grafico/David/David2.jpg", 
    "./grafico/David/David3.jpg", 
    "./grafico/David/David4.jpg",
    "./grafico/David/David5.jpg",
    "./grafico/David/David6.jpg",
    "./grafico/David/David7.jpg",
    "./grafico/David/David8.jpg"

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