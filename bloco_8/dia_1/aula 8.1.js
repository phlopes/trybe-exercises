//Exercício 1

const newEmployees = (gerarEmail) => {
  const employees = {
    id1: gerarEmail('Pedro Guerra'),
    id2: gerarEmail('Luiza Drumond'),
    id3: gerarEmail('Carla Paiva'),
  }
  return employees;
};

const gerarEmail = (fullname) => {
  const email = fullname.toLowerCase().split(' ').join('_');
  return { fullname, email: `${email}@trybe.com` };
};

console.log(newEmployees(gerarEmail))

//Exercício 2

const resultadoSorteio = (number) => {
  return Math.floor(Math.random() * 5 + 1);
}

const checkNumber = (resultadoSorteio, number) => {
  const numeroSorteado = resultadoSorteio()
  return (numeroSorteado === number) ? `${numeroSorteado} - vc ganhou` : `${numeroSorteado} - tente novamente`;
}
console.log(checkNumber(resultadoSorteio, 2));

//Exercício 3

const respostaCorreta = 'paulo'
const respostaUser = 'Paulo'

const result = (respostaCorreta) => (respostaUser) => respostaCorreta.toLowerCase() === respostaUser.toLowerCase();

console.log(result(respostaCorreta)(respostaUser));

//Exercício 4
const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const respostas = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const correction = (gabarito, respostas, contagemNota) => {
  return contagemNota(gabarito, respostas);
}


const contagemNota = (gabarito, respostas) => {
  let total = 0
  for (let i = 0; i < gabarito.length && respostas.length; i += 1) {
    if (gabarito[i] === respostas[i]) {
      total += 1
    } else if (gabarito[i] === 'N.A' || respostas[i] === 'N.A') {
      total += 0
    } else {
      total -= 0.5
    }
  } return total;
}

console.log(correction(gabarito,respostas, contagemNota))








