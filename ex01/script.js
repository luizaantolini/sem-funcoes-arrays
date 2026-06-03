let nomes = []; //variável para armazenar os nomes na array (lista)
for (let posição = 0; posição < 7; posição++) { //cria um contador chamado posição que começa em 0, o laço vai continuar rodando enquanto posição for menor que 7 (repetição), o posição++ soma mais um no valor de posição a cada rodada
    nomes[posição] = prompt("Digite o nome da pessoa " + (posição + 1));
}
for (let posição = 6; posição >= 0; posição--) { // o contador posição começa em 6 pq foi a última posição do array (começa em 0 até 6 = 7 posições), o laço vai continuar enquanto posição for maior ou igual a 0, o posição-- diminui os valores um por um (de 6 até 0)
    console.log(nomes[posição]); //armazena os nomes na ordem inversa de acordo com a variável posição 
} let listaReversa = "";
for (let posição = 6; posição >= 0; posição--) {
    listaReversa += "\n" + nomes[posição];
}
alert("Aqui estão os nomes na ordem inversa: " + listaReversa);