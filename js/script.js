function calcularAreaCirculo() {
    var raio = parseFloat(document.getElementById("raioInput").value);
    var area = Math.PI * raio * raio;
    if (raio , area == 0) {
        alert("Erro: Informe um valor válido")
    }
    document.getElementById("areaCirculoOutput").innerHTML = "Área do Círculo: " + area.toFixed(2);
}

function calcularAreaRetangulo() {
    var base = parseFloat(document.getElementById("baseInput").value);
    var altura = parseFloat(document.getElementById("alturaInput").value);
    var area = base * altura;
    if (base , altura == 0) {
        alert("Erro: Informe um valor válido")
    }
    document.getElementById("areaRetanguloOutput").innerHTML = "Área do Retângulo: " + area.toFixed(2);
}

function calcularAreaTriangulo() {
    var base = parseFloat(document.getElementById("baseTrianguloInput").value);
    var altura = parseFloat(document.getElementById("alturaTrianguloInput").value);
    var area = (base * altura) / 2;
    if (base, altura == 0) {
        alert("Erro: Informe um valor válido")
    }
    document.getElementById("areaTrianguloOutput").innerHTML = "Área do Triângulo: " + area.toFixed(2);
}

function calcularHipotenusa() {
    var cateto1 = parseFloat(document.getElementById("cateto1Input").value);
    var cateto2 = parseFloat(document.getElementById("cateto2Input").value);
    var hipotenusa = Math.sqrt(cateto1 * cateto1 + cateto2 * cateto2);
    if (cateto1 , cateto2 == 0) {
        alert("Erro: Informe um valor válido")
    }
    document.getElementById("hipotenusaOutput").innerHTML = "Hipotenusa: " + hipotenusa.toFixed(2);
}

function calcularBhaskara() {
    var a = parseFloat(document.getElementById("aInput").value);
    var b = parseFloat(document.getElementById("bInput").value);
    var c = parseFloat(document.getElementById("cInput").value);
    if (a === 0 || b === 0 || c === 0) {
        alert("Erro: Digite valores diferentes de zero para os coeficientes a, b e c.");
        return;
    }

    var delta = b * b - 4 * a * c;

    if (delta >= 0) {
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.getElementById("bhaskaraOutput").innerHTML = "Soluções: x1 = " + x1.toFixed(2) + ", x2 = " + x2.toFixed(2);
    } else{
        alert("Erro: Delta negativo ou sem soluções reais.");
    }
    
}

function converterMoedas() {
    var reais = parseFloat(document.getElementById("reaisInput").value);
    var dolares = reais / 4.9; reais
    if (reais , dolares == 0) {
        alert("Erro: Insira um valor válido")
    }
    document.getElementById("moedasOutput").innerHTML = "Valor em Dólares: " + dolares.toFixed(2);
}

function converterTemperatura() {
    var celsius = parseFloat(document.getElementById("celsiusInput").value);
    var fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("temperaturaOutput").innerHTML = "Temperatura em Fahrenheit: " + fahrenheit.toFixed(2);
}

function converterVelocidade() {
    var kmh = parseFloat(document.getElementById("kmhInput").value);
    var ms = kmh / 3.6;
    if (kmh , ms == 0) {
        alert("Erro: Insira um valor válido")
    }
    document.getElementById("velocidadeOutput").innerHTML = "Velocidade em M/S: " + ms.toFixed(2);
}

function calcularMedia() {
    var nota1 = parseFloat(document.getElementById("nota1Input").value);
    var nota2 = parseFloat(document.getElementById("nota2Input").value);
    var nota3 = parseFloat(document.getElementById("nota3Input").value);
    var media = (nota1 + nota2 + nota3) / 3;
    if (media >= 6) {
        alert("O Aluno passou de ano")
    }
    else {
        alert("O Aluno está reprovado")
    }
    document.getElementById("mediaOutput").innerHTML = "Média: " + media.toFixed(2);
}