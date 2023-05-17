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
function calcularMedia() {
    nota1 = parseFloat(document.getElementById("nota1").value);
    nota2 = parseFloat(document.getElementById("nota2").value);
    nota3 = parseFloat(document.getElementById("nota3").value);
    media = (nota1 + nota2 + nota3) / 3;
    document.getElementById("resultado").innerHTML = "A média é: " + media.toFixed(2);
}

function calcularRaizes() {
    var a = parseFloat(prompt("Digite o valor de a na equação:"));
    var b = parseFloat(prompt("Digite o valor de b na equação:"));
    var c = parseFloat(prompt("Digite o valor de c na equação:"));
    var delta = Math.pow(b, 2) - 4 * a * c;
    
    if (delta > 0) {
      var raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
      var raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
    document.getElementById("resultado").innerHTML = "As raízes da equação são: " + raiz1.toFixed(2) + " e " + raiz2.toFixed(2);
    } else if (delta === 0) {
      var raiz = -b / (2 * a);
    document.getElementById("resultado").innerHTML = "A equação possui uma raiz dupla: " + raiz.toFixed(2);
} else {
document.getElementById("resultado").innerHTML = "A equação não possui raízes reais.";
}
}

function calcularRaizes() {
    var a = parseFloat(document.getElementById("valorA").value);
    var b = parseFloat(document.getElementById("valorB").value);
    var c = parseFloat(document.getElementById("valorC").value);

    var delta = Math.pow(b, 2) - (4 * a * c);

    if (delta < 0) {
        document.getElementById("resultado").innerHTML = "A equação não possui raízes reais.";
    } else if (delta == 0) {
        var x = -b / (2 * a);
        document.getElementById("resultado").innerHTML = "A equação possui uma raiz real: x = " + x.toFixed(2);
    } else {
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.getElementById("resultado").innerHTML = "As raízes da equação são: x1 = " + x1.toFixed(2) + ", x2 = " + x2.toFixed(2);
    }
}

function converterTemperatura() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    var fahrenheit = (celsius * 1.8) + 32;
    document.getElementById("resultado").innerHTML = "A temperatura em Fahrenheit é: " + fahrenheit.toFixed(2);
}