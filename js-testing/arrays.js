let menu = [
    {name: "Maria", status: false},
    {name: "Pedro", status: true},
    {name: "Joana", status: true},
]

menu.forEach((item)=> 
    console.log(`O user ${item.name} esta ${item.status?'Ativo':'Inativo'}`)
);