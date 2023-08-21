function calculoVeiculo(valorVeiculo) {
    console.log("Veículo custa = R$" + valorVeiculo.toFixed(2));
    const valorEntrada = valorVeiculo * 0.30;
    console.log("Valor da entrada será: R$" + valorEntrada.toFixed(2))
    const valorFinanciado = valorVeiculo - valorEntrada;
    const valorParcela = valorFinanciado / 12;
    console.log("O valor financiado fica R$" + valorFinanciado.toFixed(2) + " em 12x de " + valorParcela.toFixed(2));
}

calculoVeiculo(30000);