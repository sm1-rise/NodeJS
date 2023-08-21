function clubePesca(quantPessoas, quantPeixe) {
    const entradaClube = 20;
    const valorPeixe = 12;
    const totalEntradaPessoas = entradaClube * quantPessoas;

    if (quantPeixe <= 1) {
        console.log("Total pessoas: " + quantPessoas);
        console.log("Quantidade peixe = " + quantPeixe);
        valorTotal = totalEntradaPessoas;
        console.log("Valor total : " + valorTotal.toFixed(2));
    }
    else {
        console.log("Total pessoas: " + quantPessoas);
        console.log("Quantidade peixe = " + quantPeixe);
        quantPeixe = quantPeixe - quantPessoas;
        valorTotal = (totalEntradaPessoas + quantPeixe * valorPeixe);
        console.log("Valor total : " + valorTotal.toFixed(2));
    }
}

clubePesca(3, 1);
console.log();
clubePesca(3, 4);
console.log();
clubePesca(3, 7);