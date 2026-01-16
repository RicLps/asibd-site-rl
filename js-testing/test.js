/*let age = Number(prompt("Insira a sua idade"))

if (age >= 18) {
    console.log("É maior de idade");
} 
else {
    console.log("É menor de idade");
}*/

let a = Number(prompt("Insira o primeiro número"));
let b = Number(prompt("Insira o segundo número"));
let c = Number(prompt("Insira o terceiro número"));

if (a > b) {
    if (a > c) {
        console.log("O maior número é", a);
    }
    else if (a == c) {
        console.log("O primeiro e o terceiro número são iguais (" + a + ")")
    }
    
}