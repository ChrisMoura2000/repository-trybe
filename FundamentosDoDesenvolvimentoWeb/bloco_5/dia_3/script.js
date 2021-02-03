function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  //Exercício 1:
  function createDaysOfMonth(){
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let elementUl = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1){
        let elementLi = document.createElement('li');
        elementUl.appendChild(elementLi)
        elementLi.className= 'day';
        elementLi.innerText = dezDaysList[index]

        if(dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31){
            elementLi.className += ' day-holiday'
        }
        if(dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25){
           elementLi.className += ' friday'
        }
    }
  }
    createDaysOfMonth()

  //Exercicio2
    function addBoton (string){
      let boton = document.createElement('button');
      let divBoton = document.querySelector('.buttons-container');
      divBoton.appendChild(boton)
      boton.id = 'btn-holiday' 
      boton.innerText = string;
    }
  addBoton('Feriados')
  
  //Exercicio3
  function clickHoliday(){
    let classeHoliday = document.querySelectorAll('.day-holiday')
    for (let index = 0; index < classeHoliday.length; index += 1){
      classeHoliday[index].style.backgroundColor = 'white'
    }
  }
  function dblClickHoliday(){
    let classeHoliday = document.querySelectorAll('.day-holiday')
    for (let index = 0; index < classeHoliday.length; index += 1){
      classeHoliday[index].style.backgroundColor = 'rgb(238,238,238)'
    }
  }
  
  let botao = document.querySelector('#btn-holiday');
  botao.addEventListener('click', clickHoliday); 
  botao.addEventListener('dblclick', dblClickHoliday);

  //Exercício 4:
  function fridayDay(string){
    let botFriday = document.createElement('button');
    let divPai = document.querySelector('.buttons-container');
    divPai.appendChild(botFriday);
    botFriday.innerText = string  
    botFriday.id = 'btn-holiday'
    botFriday.className = 'botFriday'
  }
fridayDay('Sexta-feira')

//Exercicio 5
let diasOriginais = [];
let classFriday = document.querySelectorAll('.friday');
for (let index = 0; index < classFriday.length; index += 1){
  diasOriginais[index] = classFriday[index].innerText;
}
function changeToFriday(){
  
  for (let index = 0; index < classFriday.length; index += 1){
    if (classFriday[index].innerText === 'Sextou'){
      classFriday[index].innerText = diasOriginais[index];
    }else{
      classFriday[index].innerText = 'Sextou'
    }
  }
  console.log(diasOriginais)
}
let botao2 = document.querySelector('.botFriday')
botao2.addEventListener('click', changeToFriday)

//Exercicio 6
/*
function zoomin(event){
  event.target.style.fontSize = '40px'
  event.target.style.color = 'green'
}

function zoomout(event){
  event.target.style.fontSize = '20px'
  event.target.style.color = ''
}

function zoom(){
  let classeDay = document.querySelectorAll('.day')
  for (let index = 0; index < classeDay.length; index += 1){
    classeDay[index].addEventListener('mouseover', zoomin);
    classeDay[index].addEventListener('mouseleave', zoomout);
  }
}
zoom()
*/

//Exercicio7
/*Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .*/
let nomeTask = document.querySelector('#task-input');
let valor = nomeTask.value;
let btn = document.querySelector('#btn-add');
function addTask(string){
  let span = document.createElement('span');
  let myTasksDiv = document.querySelector('.my-tasks');
  myTasksDiv.innerText = string;
  myTasksDiv.appendChild(span)
}
btn.addEventListener('click', addTask(valor))
