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

  function changeOjt (object, key, value){
    object[key] = value
    console.log(object)
  }

  changeOjt(lesson1, 'turno', 'noite');

function listKeys (object){
   return Object.keys(object)
}

//console.log(listKeys(lesson3))
let ex3 = (obj) => {
    return Object.entries(obj).length
}

console.log(ex3(lesson2))