const prompt = require("prompt-sync")()
const produto = prompt("Produto: ")
const num = Number(prompt("Nº de Etiquetas: "))
// Cria um laço de repetição até num/2
for(let i = 1; i <= num/2; i++){
    console.log(`${produto.padEnd(30,'.')} ${produto.padEnd(30,'.')}`)
}
if(num%2 == 1){ // se quantidade de etiquetas for ímpar
    console.log(produto.padEnd(30,'.')) // imprime mais uma etiqueta
}