const objs = [
  {
    nome: "Diego",
    idade: 33,
    esta_trabalhando: true,
    detalhes_profissao: {
      profissao: "Programador",
      empresa: "Empresa X",
    },
    hobbies: ["ler", "tocar", "Programar"],
  },
  {
    nome: "Pedro",
    idade: 21,
    esta_trabalhando: false,
    detalhes_profissao: {
      profissao: null,
      empresa: null,
    },
    hobbies: ["Jogar", "Academia"],
  },
]
//JSON
//converter objeto para json
const jsonData = JSON.stringify(objs)

console.log(jsonData)
console.log(typeof jsonData)

//converter json para objeto
const objData = JSON.parse(jsonData);

console.log(objData)
console.log(typeof objData)

objData.map((pessoa) => {
    console.log(pessoa.nome)
})