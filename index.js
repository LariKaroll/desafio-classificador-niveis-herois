const prompt = require('readline-sync')

let name = prompt.question('Nome do personagem: ')
let xp = prompt.question('Digite o xp: ')
let contador = 0

while((name !== "") && (xp !== "") || contador){
    console.log("nome: "+ name + "\nxp: " + xp)
}

