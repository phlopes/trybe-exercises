const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const shiftMorning = (obj, key, value) => obj[key] = value;
shiftMorning(lesson2, 'turno', 'manhã')
console.log(lesson2);

const listKeys = obj => Object.keys(obj);
console.log(listKeys(lesson2));

const objLength = obj => Object.values(obj).length;
console.log(objLength(lesson1))

const listValues = obj => Object.values(obj);
console.log(listValues(lesson3))


const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 })
console.log(allLessons);



const numberStudents = (obj) => {
  const students = Object.keys(obj);
  let total = 0
  for (let index in students) {
    total += obj[students[index]].numeroEstudantes
  }
  return total
}
console.log(numberStudents(allLessons))



const valueKey = (obj, position) => Object.values(obj)[position]
console.log(valueKey(lesson1, 0))



const verification = (obj, key, value) => {
  const objeto = Object.entries(obj);
  for (let index in objeto) {
    if (objeto[index][0] === key && objeto[index][1] === value) {
      return true
    } else {
      return false
    }
  }
}
console.log(verification(lesson1, 'materia', 'Matemática'));


