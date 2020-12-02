 
let n = 1; 
let asterico = '';

if (n > 1){
    for (let i = 1; i <= n; i += 1){
        asterico += '*'
    }
    for (let j = 1; j <= n; j += 1){
        console.log(asterico)
    }
}else{
    console.log('Valor minimo exigido incorreto!')
}


