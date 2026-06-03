let vetor1 = [];
let vetor2 = [];

alert ("Digite os valores do primeiro vetor:");
for (let posição = 0; posição < 5; posição++) {
    vetor1[posição] = parseInt(prompt("Digite os valores de " + (posição + 1) + ": "));
}

alert ("Digite os valores do segundo vetor:");
for (let posição = 0; posição < 5; posição++) {
    vetor2[posição] = parseInt(prompt("Digite os valores de " + (posição + 1) + ": "));
}


let vetor3 = []; //terceiro vetor que guardará os números que existem em ambos os vetores

let posicaoVetor3 = 0; // cria uma variável para controlar em qual "gaveta" livre do vetor3 vamos guardar o número encontrado

for (let i = 0; i < 5; i++) { // primeiro loop (i): escolhe um número do vetor1 por vez para testar
    let numeroAtual = vetor1[i]; // guarda o número atual do vetor1 nessa variável para facilitar o teste
    let existeNoVetor2 = false; // cria uma variável "alarme" (falsa) para marcar se achamos o número no vetor2

    for (let j = 0; j < 5; j++) { // segundo loop (j): Vasculha o vetor2 inteiro procurando pelo 'numeroAtual'
        if (vetor2[j] === numeroAtual) { //se o número do vetor2 for igual ao número do vetor1...
            existeNoVetor2 = true; // ativa o alarme avisando que ele existe no vetor2
            break; // para o loop 'j' na hora, pois já achamos o que queríamos no vetor2
        }
    }

    if (existeNoVetor2) { // se o alarme foi ativado (o número existe no vetor2), vamos para o próximo teste
        let jaEstaNoVetor3 = false; // cria outra variável "alarme" para checar se já colocamos esse número no vetor3 antes

        for (let k = 0; k < posicaoVetor3; k++) { // terceiro loop (k): passa apenas pelas posições do vetor3 que já foram preenchidas até agora
            if (vetor3[k] === numeroAtual) { // se o número já estiver guardado lá dentro...
                jaEstaNoVetor3 = true; // ativa o alarme de que o número é repetido no vetor3
                break; // para o loop 'k' na hora, não precisa continuar olhando
            }
        }

        if (!jaEstaNoVetor3) { // ae o número passou nos dois testes (existe no vetor2 E NÃO está repetido no vetor3)
            vetor3[posicaoVetor3] = numeroAtual; // guarda o número na posição livre atual do vetor3
            posicaoVetor3++; // soma 1 na posição do vetor3 para que o próximo número use a próxima gaveta livre
        }
    }
}

let resultadoTexto = ""; // cria uma variável de texto vazia para juntar os números do vetor3 de forma bonita
for (let i = 0; i < posicaoVetor3; i++) { // faz um laço que roda apenas a quantidade de vezes de números que guardamos no vetor3
    resultadoTexto += vetor3[i] + (i < posicaoVetor3 - 1 ? ", " : ""); // adiciona o número ao texto. se não for o último número, adiciona uma vírgula depois dele
}

alert("Vetor 1: [" + vetor1 + "]" + 
    "\nVetor 2: [" + vetor2 + "]" + 
    "\nResultado (números presentes em ambos): [" + resultadoTexto + "]");