const express = require('express')
const path = require('path')

const app = express()

//definindo o template engine

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
//definindo arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))

//habilita server para receber dados via post (formulário)
app.use(express.urlencoded({extended: true}))


//rotas
app.get('/', (request, response) => {
    response.render('index', {
        title: 'Titulo teste'
    })
})

//404 Not Founder
app.use((request, response) => {
    response.send('Página não encontrada!')
})

//executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))