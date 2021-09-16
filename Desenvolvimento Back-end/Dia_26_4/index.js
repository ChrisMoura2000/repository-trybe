const express = require('express');

const app = express();

app.get('/ping', (req, res) => {
    res.json({ message: "pong" })
});

app.get('/hello', (req, res) => {
    console.log(req);
})

app.listen(3000, () => {
    console.log('Aplicação ouvindo na port 3000');
});

