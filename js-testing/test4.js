//Exercico 8
/*let arquivo = "arquivo.png";
let array = arquivo.split(".");

if (array[1] != "png" && array[1] != "jpg")
    console.log("Formato de arquivo invalido!");
else
    console.log("Arquivo validado com sucesso!");*/


//Exercicio 9
/*let nome = " ricardo armindo de meloção correiam lopes ";
nome = nome.trim();
let nomeNormalizado = "";

let arr = nome.split(" ");
for (let elem in arr){
    if (arr[elem].includes("ção") || arr[elem].endsWith("m"))
        continue
    nomeNormalizado += arr[elem].at(0).toUpperCase() + arr[elem].substring(1) + " ";
}

console.log(nomeNormalizado);*/

//Exercicio 10
/*const prompt = require("prompt-sync")();
let tecnologias = [];

while (1){
    let input = prompt("Insira tecnologias para serem armazenadas numa lista.Digite [-1] pra sair. => ")
    if (input == -1) {
        break;
    }
    tecnologias.push(input);
}
console.log(tecnologias);*/


//Exercicio 11
/*const prompt = require("prompt-sync")();
let texto = prompt("Insira o nome do arquivo: ");

if (!(texto.startsWith("index")) || !(texto.endsWith(".php") || texto.endsWith(".html"))){
    console.log("O arquivo nao pode ser compilado");
}
else{
    console.log("Arquivo compilado com sucesso");
}*/

//Exercicio 12
/*const prompt = require("prompt-sync")();
let texto = prompt("Insira o texto: ");
let array = texto.split(" ");

if (array.length > 15)
    console.log("Ultrapassou o limite maximo de palavras!");*/