function calcularRacao(kgRacao, quantRacao) {
    const totalDias = kgRacao / quantRacao;
    const sobraRacao = kgRacao % quantRacao;
    console.log("Quantidade em KG: " + kgRacao.toFixed(2) + "kg");
    console.log("Quantidade por dia: " + quantRacao.toFixed(3) + "kg");
    console.log("Total: " + totalDias.toFixed(1) + " dias");
    console.log("Sobra ração: " + sobraRacao.toFixed(3) + "kg");
}

calcularRacao(1, 0.200);
console.log();
calcularRacao(2, 0.700);

//Acredito que essa deu ruim :(