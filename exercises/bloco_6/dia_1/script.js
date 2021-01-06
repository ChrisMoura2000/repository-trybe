const selectTag = document.querySelector('#state');
const estados = ['São Paulo', 'Rio de Janeriro', 'Minas Gerais', 'Bahia'];
const botStop = document.querySelector('#bot');
const form = document.querySelector('#form');
const nome = document.querySelector('#name');
const email = document.querySelector('#input-email');
const cpf = document.querySelector('#cpf');
const endereco = document.querySelector('#endereco');
const city = document.querySelector('#city');
const state = document.querySelector('#state');
const casa = document.querySelector('#casa')
const curriculo = document.querySelector('#curriculo');
const cargo = document.querySelector('#cargo');
const descriptcargo = document.querySelector('#descricao');

let inputs = document.querySelectorAll('input')
let data = document.querySelector('#data');


for (let index = 0; index < estados.length; index += 1){
  let option = document.createElement('option');
  selectTag.appendChild(option)
  option.innerText = estados[index]
}

function interrompeAutomatico(evt){
  evt.preventDefault()
  let arrayData = data.value.split('-')
  if(arrayData[0] < '0' || arrayData[0] > '2021'){
    alert('Data incorreta favor digitar novamente!')
    console.log(arrayData[0])
  }
  if(arrayData[1] < '0' || arrayData[1] > '12'){
    alert('Data incorreta favor digitar novamente!')
    console.log(arrayData[1])
  }
  if(arrayData[2] < '0' || arrayData[2] > '31'){
    alert('Data incorreta favor digitar novamente!')
    console.log(arrayData[2])
  }
  
  let newDiv = document.createElement('div'); 
  form.appendChild(newDiv);

  newDiv.innerHTML += `<p>Nome: ${nome.value}`;
  newDiv.innerHTML += `<p>E-mail: ${email.value}`;
  newDiv.innerHTML += `<p>CPF: ${cpf.value}`;
  newDiv.innerHTML += `<p>Endereço: ${endereco.value}`;
  newDiv.innerHTML += `<p>Cidade: ${city.value}`;
  newDiv.innerHTML += `<p>Estado: ${state.value}`;
  newDiv.innerHTML += `<p>Curriculo: ${curriculo.value}`;
  newDiv.innerHTML += `<p>Cargo: ${cargo.value}`;  
  newDiv.innerHTML += `<p>Descrição do cargo: ${descriptcargo.value}`;

  if(casa.checked === true){
    newDiv.innerHTML += `<p>Moradia: Casa`;
  }else{
    newDiv.innerHTML += `<p>Moradia: Apartamento`;
  }

}

botStop.addEventListener('click', interrompeAutomatico)