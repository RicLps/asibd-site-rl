//Exercicio 1
let text = "idiota do caramba seu estupido"
let arr = text.split(" ")
let listaPalavras = ["idiota", "estupido", "estrupicio", "desgramado", "caramba"];
let newText;

for (let palavra in listaPalavras){
    for (let elem of arr){
        if (arr[elem] == palavra) {
            newText += arr.replace(arr[elem], "*****")
        }
    }
}

console.log(newText);




/*==================================================*/



//Exercicio 2
/*let texto = "Ola como vai o seu dia"
let palavra = "vai"

console.log(texto.indexOf(palavra));*/



/*=================================================*/



//Exercicio 3
/*let palavra = "cambalhota";
let letra = "t";

if (palavra.includes(letra)){
    console.log(`A letra ${letra} esta na posicao ${palavra.indexOf(letra)}`);
}
else {
    console.log("A palavra nao contem a letra iserida");
}*/



/*=================================================*/



//Exercicio 4
/*let nome = "ricardo armindo correia lopes"
let array = nome.split(" ");

for (let nome in array) {
    nome[0].toUpperCase();
}*/



/*==================================================*/



//Exercicio 5
/*let email = "ricardo@gmail.com"

if (!(email.includes("@")) || (email.substring(email.indexOf("."), email[-1]).length > 4 || email.substring(email.indexOf("."), email[-1]).length < 3)) {
    console.log("Email invalido");
}
else{
    console.log("Endereco validado com sucesso");
}*/



/*==================================================*/



//Exercicio 6
/*let nome = "ricardo";
let sobrenome = "lopes";
let nomeEmpresa = "cape verde airlines";
let empSemEspaco = nomeEmpresa.replace(/ /g, "");
let pais = "Portugal"
let listaPaises = {
    "Portugal": ".pt",
    "Brasil": ".br",
    "Cabo Verde": ".cv"
};
let arrEmail = [nome, ".", sobrenome, "@", empSemEspaco, listaPaises[pais]];

let email = arrEmail.join("");
console.log(email);*/