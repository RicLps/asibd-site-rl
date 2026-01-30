/*let name = "Ana";

function printMSG(){
    name = "Maria";
    let msg = "Hey, " + name

    alert(msg);
}

alert(name);
printMSG();
alert(name);*/

/*function printMSG(name, msg="Seja Benvindo "){
    let message = msg + name;
    console.log(message)
}

printMSG("Maria");*/

/*function verifIdade(idade){
    let acesso = idade >= 18 ? true : false;
    verifAcesso(acesso);
}

function verifAcesso(acesso){
    acesso ? alert("Acesso liberado") : confirm("Acesso Autorizado?") ? alert("Acesso liberado") : alert("Acesso negado");
}

let idade = prompt("Insira a idade: ");
verifIdade(idade)*/

/*let sum = (a,b) => a + b;
alert(sum(1,2))*/

/*let sum = (a,b) => {
    let result = a + b;
    return result;
};

alert(sum(1,2));*/

/*function imc(altura, peso) {
    let a = +altura.toFixed(2);
    let p = +peso.toFixed(2);

    let imc = p / (a * a);
    +imc.toFixed(2);

    return imc;
}

let altura = Number(prompt("Insira a sua altura com 5 casas decimais: "));
let peso = Number(prompt("Insira o seu peso com 5 casas decimais: "));
alert(imc(altura, peso));*/