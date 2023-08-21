
function Calculadora(num1, num2) {

    const soma = num1 + num2;
    console.log("A soma de " + num1 + " + " + num2 + "= " + soma);

    const subt = num1 - num2;
    console.log("A subtração de " + num1 + " - " + num2 + "= " + subt);

    const multi = num1 * num2;
    console.log("A soma multi " + num1 + " * " + num2 + "= " + multi);

    const div = num1 / num2;
    console.log("A divisão de " + num1 + " / " + num2 + "= " + div.toFixed(2));

}

Calculadora(30, 2);