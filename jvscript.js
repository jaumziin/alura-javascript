var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var imc = peso / (altura * altura); 
var tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;

var pesoEhValido = true;
var alturaEhValida = true;

if(peso <= 0 || peso >= 600 ){
    console.log("Peso inválido");
    pesoEhValido = false;
    tdImc.textContent= "Peso inválido!";
}

if(altura <= 0 || altura >= 3.00){
    console.log("Altura inválida");
    alturaEhValida = false;
    tdImc.textContent= "Peso inválido!";
}

if(alturaEhValida && pesoEhValido){
    console.log("Altura e peso válidos!")
    tdImc.textContent = imc;
}

