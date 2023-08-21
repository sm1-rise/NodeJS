function comprarGame(idade) {
    console.log("Sua idade = " + idade);
    if (idade <= 16) {
        console.log("Idade insuficiente, não será possível realizar a compra");
    }
    else {
        console.log("Pode efetuar a compra");
    }
}

comprarGame(18);