const backColor = document.querySelector('#backGround');
const colorTxt = document.querySelector('#colorTxt');
const fontSize = document.querySelector('#fontSize');
const espaceLetters = document.querySelector('#espaceLetters');
const fontStyle = document.querySelector('#fontStyle');

backColor.addEventListener('mousein', function (){
    localStorage.setItem('corFundo', backColor.value);
    document.body.style.backgroundColor = localStorage.corFundo;
})
document.body.style.backgroundColor = localStorage.corFundo;