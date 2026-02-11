//1- Crie um array de objetos com os dados de 5 alunos (nome, morada e notas, que devem ser apresentadas em array e conter pelo menos 5)
//1.1- Calcule a media de notas de cada aluno. 
//1.2- Apresenta apenas os alunos com media superior a 9,5
//1.3- Implemente uma logica numa funcao que nos permita passar num funcao a chave e o valor que devem ser adicionados no objeto

let alunos = [
    {
        nome: "Maria",
        morada: "Ribeirinha",
        notas: [14, 20, 14, 12, 9],
        media: function(){
            let total;
            for(let nota in this.notas){
                total += nota;
            }
            media = total/this.notas.length;
            return media;
        }
    },
    {
        nome: "Pedro",
        morada: "Pedra Rolada",
        notas: [8, 3, 14, 1, 17],
        media: function(){
            let total;
            for(let nota in this.notas){
                total += nota;
            }
            media = total/this.notas.length;
            return media;
        }
    }, 
    {
        nome: "Jose",
        morada: "Cha de Marinha",
        notas: [16, 14, 12, 18, 19],
        media: function(){
            let total;
            for(let nota in this.notas){
                total += nota;
            }
            media = total/this.notas.length;
            return media;
        }
    }, 
    {
        nome: "Miguel",
        morada: "Monte Sossego",
        notas: [10, 10, 19, 18, 1],
        media: function(){
            let total;
            for(let nota in this.notas){
                total += nota;
            }
            media = total/this.notas.length;
            return media;
        }
    },
    {
        nome: "Aldemir",
        morada: "Madeiralzinho",
        notas: [1, 3, 4, 5, 6],
        media: function(){
            let total;
            for(let nota in this.notas){
                total += nota;
            }
            media = total/this.notas.length;
            return media;
        }
    }
]

function adicionarValores(chave, valor, nomeAluno){
    for (let aluno of alunos){
        if (aluno["nome"] == nomeAluno)
            aluno[chave] = valor
    }
}

const prompt = require("prompt-sync")();

let chave = prompt("Insira a chave que pretende adicionar: ");
let valor = prompt("Insira o valor pertencente a chave: ")
let nomeAluno = "";

while (true){
    nomeAluno = prompt("Insira o aluno que recebera o novo item: ")
    for (let aluno of alunos){
        if (aluno["nome"] == nomeAluno){
            x = 1;
            break;
        }
    }
    if (x){
        break;
    }
    console.log("O nome inserido nao consta da lista de alunos");
}

for (let aluno of alunos){
    if (aluno.media() > 9.5)
        console.log(`O aluno ${aluno["nome"]} teve a media de ${aluno.media()}`);
}

adicionarValores(chave, valor, nomeAluno);
console.log(alunos)