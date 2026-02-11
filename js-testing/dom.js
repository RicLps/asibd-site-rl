let person = {
    name: "Jacinto",
    surname: "Leite",
    age: 78,
    favActivities: {indoors: "eat", outdoors: "run"}
};

console.log(person.favActivities.indoors);

let student = {
    name: "Otávio",
    presentation: function(){
        return "Yoo, my nome eh " + this.name;
    }
}
console.log(student.presentation());

for (let chave in student){
    console.log(`${chave}: ${aluno[chave]}`);
}
