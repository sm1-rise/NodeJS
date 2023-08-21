function calculoFrete(cidade, bairro) {
    const valorCidade = 10;
    const valorBairro = 2;

    const precoFrete = valorCidade + valorBairro;
    console.log("Frete para: " + cidade + "," + bairro);
    console.log("Total = " + precoFrete.toFixed(2));
}

calculoFrete("São Paulo", "São Miguel Paulista");