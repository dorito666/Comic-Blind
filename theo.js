let visualizador = document.getElementById("paginas2");
let anteriorBTN = document.getElementById("anteriorBTN");
let siguienteBTN = document.getElementById("siguienteBTN");
let ventana = document.getElementById("ventana");

let numeros = [
    "./grafico/Theo/En blanco_Pagina 1_ Portada.jpg", 
    "./grafico/Theo/En blanco_Pagina 2.jpg", 
    "./grafico/Theo/En blanco_Pagina 3.jpg", 
    "./grafico/Theo/En blanco_Pagina 4.jpg"
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