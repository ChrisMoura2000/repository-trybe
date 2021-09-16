const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('<h1>AGA um aqui</h1>'))

// app.get('/bug', (req, res) => {
//     console.log('passando pelo bug');
//     res.send('<h3>Bugou aqui</h3>')
//     process.exit(1)
// })

app.listen(port, () => console.log(`Server ta on, na porta: ${port}!`))
