let pecaXadrez = "ReI";

switch (pecaXadrez.toLowerCase()) {
    case"peão":
    console.log("Se move para frente, uma casa por vez.");
    break

    case"bispo":
    console.log("O bispo se move em uma linha reta diagonalmente.");
    break

    case"torre":
    console.log("A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas.");
    break

    case"cavalo":
    console.log("O cavalo move-se por duas casas horizontalmente ou verticalmente.");
    break

    case"rainha":
    console.log("A Rainha pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente.");
    break

    case"rei":
    console.log("O Rei pode mover-se uma casa em qualquer direção: horizontalmente, verticalmente ou diagonalmente.");
    break

    default:
        console.log('Erro, peça não existe')
}
