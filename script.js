
let valor;
let numero;

function inserir(numero) {
    valor = document.getElementById("resultado").textContent;
    document.getElementById("resultado").textContent = valor + numero;
}

function somar(numero) {
    valor = document.getElementById("resultado").textContent;
    document.getElementById("resultado").textContent = valor + numero;
}

function limparTela() {
    document.getElementById("resultado").textContent = "";
}

function calcular() {
    let resultado = document.getElementById("resultado").textContent;
    if(resultado){
        document.getElementById("resultado").textContent = resultado;
    }else{
        document.getElementById("resultadi").textContent = "0";
    }
}










