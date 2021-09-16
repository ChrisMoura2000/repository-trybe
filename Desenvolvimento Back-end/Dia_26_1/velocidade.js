const readLine = require('readline-sync');

function averageSpeedCar(){
    const distancia = readLine.questionInt(" Distância: ")
    const tempo = readLine.questionInt(" Tempo: ")
    return ` ${distancia / tempo} m/s`
};

// module.exports = averageSpeedCar;
