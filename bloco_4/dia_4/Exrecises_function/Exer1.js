function ifPolimoro(word){
    let cont = 0;
    for (let index = 0; index < word.length; index += 1){
        if (word[index] === word[word.length - index -1]){
           cont += 1
        }
    }
    if(cont === word.length){
        return true
    }else{
        return false
    }

}

console.log(ifPolimoro('arara'))

//Deu certo

