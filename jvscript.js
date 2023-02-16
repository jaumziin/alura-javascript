var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if(peso <= 0 || peso >= 600){
    console.log("Peso inválido");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
}

if(altura <= 0 || altura >= 3){
    console.log("Altura inválida");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!";
}

if(peso >= 0 || peso >= 600 && altura <= 0 || altura >= 2.50){

}

if(alturaEhValida && pesoEhValido){
    console.log("Altura e/ou peso válidos!");
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}

// SEGUNDO PACIENTE //

var paciente2 = document.querySelector("#segundo-paciente");

var tdPeso2 = paciente2.querySelector(".info-peso");
var peso2 = tdPeso2.textContent;

var tdAltura2 = paciente2.querySelector(".info-altura")
var altura2 = tdAltura2.textContent;

var peso2EhValido = true;
var altura2EhValida = true;

var tdImc2 = paciente2.querySelector(".info-imc");
var imc2 = peso2 / (altura * altura);

if(peso2 <= 0 || peso2 >= 600){
    console.log("Peso inválido")
    pesoEhValido = false;
    tdImc2.textContent("Peso inválido");
}

if(altura2 <= 0 || altura2 >= 2.50){
    console.log("Altura inválido");
    altura2EhValida = false;
    tdImc2.textContent("Altura inválida");
}

if(peso2EhValido && altura2EhValida){
    console.log("Altura e/ou peso válidos");
    var imc2 = peso2 / (altura2 * altura2);
    tdImc2.textContent = imc2;
}


