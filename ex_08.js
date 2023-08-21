function parcelar(valorCompra) {
    const maxParcela = 6;
    const valorMinParcela = 20;
    let quantMaxParcela;
    for (i = 1; i <= maxParcela; i++) {
        const valorParcela = valorCompra / i;
        if (valorParcela >= valorMinParcela) {
            console.log("Cliente pode parcelar: R$" + valorCompra + " em " + i + "x de " + valorParcela.toFixed(2));
            quantMaxParcela = i;
        }
    }
    console.log("Máximo parcelas: " + quantMaxParcela);
}

parcelar(55);