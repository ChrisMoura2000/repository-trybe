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

fontSize.addEventListener('change', function(){
  localStorage.setItem('tamanhoFont', fontSize.value);
  document.body.style.fontSize = localStorage.tamanhoFont +'pt';
})
document.body.style.fontSize = localStorage.tamanhoFont +'pt';

espaceLetters.addEventListener('change', function(){
  localStorage.setItem('spaceLine', espaceLetters.value);
  document.body.style.lineHeight = localStorage.spaceLine + 'px';
});
document.body.style.lineHeight = localStorage.spaceLine + 'px';

fontStyle.addEventListener('change', function(){
  localStorage.setItem('familyFont', fontStyle.value);
  document.body.style.fontFamily = localStorage.familyFont;
});
document.body.style.fontFamily = localStorage.familyFont;

let restaurar = document.querySelector('#reset')

restaurar.addEventListener('click', function(){
  localStorage.clear()
  document.location.reload(true);
})
