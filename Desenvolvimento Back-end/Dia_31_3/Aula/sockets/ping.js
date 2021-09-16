module.exports = (io) => {
  io.on('connection', (socket) => {

    socket.emit('ola', 'Que bom que você chegou aqui! Fica mais um cadin, vai ter bolo :)');

    socket.on('ping', () => {
      console.log(`${socket.id} emitiu 1!`);
      io.emit('pong', `${socket.id} enviou um ping!`); // essa linha envia um aviso para o cliente que o ping chegou.
    });
  });
};