let num = [];
let soma = 0;
for (let posição = 0; posição < 8; posição++) { //a posição começa em 0, e vai aumentando progressivamente até 8
    num[posição] = parseFloat(prompt("Por favor, digite um número real: " + (posição + 1)));
    soma += num[posição]; //cada número é somado ao valor da variável soma
} let media = soma / 8;
let acimaMedia = "";
for (let posição = 0; posição < 8; posição++) { //enquanto a posição for menor que 8, ele continua aumentando os números
    if (num[posição] > media) { //se o num na posição for maior que a média, ele é adicionado na variável acimaMedia
        acimaMedia += "\n" + num[posição];
    }
}
alert ("A média dos números é: " + media.toFixed(2)); //exibe a média dos números, usando toFixed para limitar a 2 casas decimais
alert("Os valores acima da média são: " + acimaMedia);