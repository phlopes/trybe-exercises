const testingScope = (escopo) => {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}
testingScope(true);

//////////////////////////////////////////////////////////////////////

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
function ordem(pam1, pam2) {
  return (pam1 - pam2)
}
oddsAndEvens.sort(ordem);
console.log(`Os números ordenados são ${oddsAndEvens}`)

//////////////////////////////////////////////////////////////////////

const factorial = (num) => {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
console.log(factorial(5))

//////////////////////////////////////////////////////////////////////

let clickCount = 0
let contadorCliques = document.getElementById('cliques')
let button = document.getElementById('button')
button.addEventListener('click', () => contadorCliques.innerText = clickCount += 1)

//////////////////////////////////////////////////////////////////////

const longestWord = (frase) => {
  let biggestWord = 0

  const longestWord = frase.split(' ')
  for (const i of longestWord) {
    if (i.length > biggestWord) {
      biggestWord = i.length
      result = i
    }
  }
  return result
}
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"))

//////////////////////////////////////////////////////////////////////

const string = (palavra) => {
  const frase = 'Tryber x aqui!'
  const fraseSplit = frase.split('')
  for (let i = 0; i < fraseSplit.length; i += 1) {
    positionFrase = fraseSplit[i];
    if (positionFrase === 'x') {
      fraseSplit[i] = `${palavra}`
    }
  } return `${fraseSplit.join('')}`

}
console.log(string('Paulo'));

const skills = ['Java Script', 'HTML', 'CSS', 'DOM', 'GIT'];
const function2 = (param) => {
  skills.sort()
  const frase = param;
  const result = `${frase} Minhas cinco principais habilidades são: 
  ${skills}`
  return result
}
console.log(function2(string('Paulo')))





