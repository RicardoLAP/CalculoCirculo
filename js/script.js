function calcularAreaCirculo() {
    raio = parseFloat(prompt("Digite o valor do raio do círculo:"));
    area = Math.PI * Math.pow(raio, 2)
    document.getElementById("resultado").innerHTML = "A área do círculo é: " + area.toFixed(2)
}

function calcularHipotenusa() {
    cateto1 = parseFloat(prompt("Digite o valor do primeiro cateto do triângulo retângulo:"))
    cateto2 = parseFloat(prompt("Digite o valor do segundo cateto do triângulo retângulo:"))
    hipotenusa = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2))
    document.getElementById("resultado").innerHTML = "A hipotenusa do triângulo retângulo é: " + hipotenusa.toFixed(2)
}

function converterParaDolar() {
    valorReal = parseFloat(prompt("Digite o valor em reais:"))
    cotacaoDolar = 4.93; // Exemplo de cotação do dólar
    valorDolar = valorReal / cotacaoDolar
    document.getElementById("resultado").innerHTML = "O valor em dólar é: $" + valorDolar.toFixed(2)
}
