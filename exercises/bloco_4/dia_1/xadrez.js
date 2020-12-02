let name = 'Xablau';

switch (name.toLowerCase()) {
    case 'peão':
        console.log('Peão anda apenas para frente come na diagonal.');
        break;
    case 'cavalo':
        console.log('Cavalo só anda em formato da letra L.');
        break;
    case 'bispo':
        console.log('Bispo só anda na diagonal.');
        break;
    case 'torre':
        console.log('Torre anda quantas casas quiser apenas pra frente pra traz pra esquerda e pra direita.');
        break;
    case 'dama':
        console.log('Dama anda quantas casa quiser e em qualquer direção.')
        break;
    case 'rei':
        console.log('Rei anda em qualquer direção mas apenas uma casa.');
        breack
    default:
        console.log('Nome da peça não reconhecido')
}

/*Rei-Dama-Torre-Bispo-Cavalo-Peão */