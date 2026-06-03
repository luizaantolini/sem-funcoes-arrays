let nomes = []; //variável para armazenar os nomes na array (lista)
let idades = []; //variável para armazenar as idades na array (lista)
for (let posição = 0; posição < 9; posição++) { //a posição começa em 0 e vai aumentando um por um até chegar no 9
    nomes[posição] = prompt("Digite o nome da pessoa " + (posição + 1)); 
    idades[posição] = parseInt(prompt("Digite a idade de " + nomes[posição] + ": "));
}
let menoresDeIdade = ""; 
for (let posição = 0; posição < 9; posição++) { 
    if (idades[posição] < 18) { // se forem menores de idade, o nome e a idade são adicionado a variável menoresDeIdade
        menoresDeIdade += "\n" + nomes[posição] + " - " + idades[posição] + " anos"; //uma pessoa + sua idade por linha
    }
}
alert("As pessoas menores de idade são:\n" + menoresDeIdade);