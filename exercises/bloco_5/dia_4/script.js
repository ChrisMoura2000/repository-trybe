const backColor = document.querySelector('#backGround');
const colorTxt = document.querySelector('#colorTxt');
const fontSize = document.querySelector('#fontSize');
const espaceLetters = document.querySelector('#espaceLetters');
const fontStyle = document.querySelector('#fontStyle');

backColor.addEventListener('change', function (){
    localStorage.setItem('corFundo', backColor.value);
    document.body.style.backgroundColor = localStorage.corFundo;
})
document.body.style.backgroundColor = localStorage.corFundo;

colorTxt.addEventListener('change', function (){
    localStorage.setItem('corFonte', colorTxt.value);
    document.body.style.color = localStorage.corFonte;
})
document.body.style.color = localStorage.corFonte;

