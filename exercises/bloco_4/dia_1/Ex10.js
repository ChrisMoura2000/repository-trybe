let valorVenda = 10;
let valorProdut = 5;

if (valorProdut < 0 || valorVenda < 0) {
    console.log('Entradas invalidas.')
}else{
    let imposto = valorProdut * 0.2;
    let lucro = (valorVenda - valorProdut);
    let lucroDeMilProdut = (lucro * 1000);
    console.log(`Valor do imposto: ${imposto}. Valor do Lucro: ${lucro}. Valor do lucro multiplicado por mil: ${lucroDeMilProdut}`)
}
