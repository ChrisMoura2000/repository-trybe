let n = 5
let asterisco = '';
let espaco = '';

for (let indexline = 1; indexline <= n; indexline += 1){
    asterisco += '*';    
    for (let indexColuna = indexline; indexColuna <= n; indexColuna += 1){
       espaco += ' ';
    }
    
    console.log(espaco + asterisco);
    espaco = '';
}