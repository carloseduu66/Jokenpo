function escolha (){
    idade = prompt("Qual a sua idade?");
if (idade >= 18) {
    alert("Você pode jogar JOKENPO.");
}
else{
    alert("Você não pode jogar JOKENPO.");
}

if (idade >= 18){
    escolhaJogador = prompt("Escolha 1-Pedra, 2-Papel ou 3-Tesoura");
    if (escolhaJogador != 1 && escolhaJogador != 2 && escolhaJogador != 3) {
        alert("Escolha inválida! Tente novamente.");
        return escolha();
    }
    escolhaComputador = Math.floor(Math.random() * 3) + 1;

    alert("O computador escolheu: " + escolhaComputador);

    if (escolhaJogador == 1 && escolhaComputador == 3 || 
        escolhaJogador == 2 && escolhaComputador == 1 ||
         escolhaJogador == 3 && escolhaComputador == 2) {
        alert("Você ganhou!");
    }
    else if (escolhaJogador == escolhaComputador) {
        alert(" Deu Empate!");
    }
    else {
        alert("Você perdeu!");
    }    
}

}

