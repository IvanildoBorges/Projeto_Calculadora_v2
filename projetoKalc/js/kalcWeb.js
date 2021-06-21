// -- DOM --

//Teclas
const keys = document.querySelectorAll(".buttons .numbers button:not(#clear, #ponto)");
const limpar = document.querySelector("#clear");
const point = document.querySelector("#ponto");

//Operadores
const funcoes = document.querySelectorAll(".buttons .operators button");

//Display
const display = document.querySelector(".screen");

//Eventos das teclas
keys.forEach(function(iterator){
    iterator.addEventListener("click", function(){
        const keyValue = iterator.getAttribute("data-val");
        inserirValor(keyValue);
    });
});

//Eventos dos operadores
funcoes.forEach(function(iterator){
    iterator.addEventListener("click", function(){
        if (iterator.innerText == "=") {
            mostrarResultado(display.innerText);
        } else {
            const funcValue = iterator.getAttribute("data-val");
            inserirValor(funcValue);
        }
    });
});

clear.addEventListener("click", function(){
    display.innerText = "0";
});

point.addEventListener("click", function(){
    if (display.innerText == "0") {
        display.innerText = "0.";
    } else {
        display.innerText = display.innerText + ".";
    }
});

//Inserir operação
const inserirValor = function(value){
    if (display.innerText.length >= 10) return;
    if (display.innerText == "0") {
        display.innerText = value;
    } else {
        display.innerText = display.innerText + value;
    }
};

//Executar operação
const mostrarResultado = function(operation) {
    display.innerText = eval(operation);
};