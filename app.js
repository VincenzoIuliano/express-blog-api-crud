console.log('Hello World!')

const express = require('express')
const app = express()
const port = 3000
const postsRouter = require('./routers/posts')

app.use(express.static('public'))

app.get('/',(req,res) => {
    res.send('Ecco l\'homepage del tuo blog!');
})

app.use('/posts', postsRouter)

const server = app.listen(port,() => {
    console.log(`Server listening on port: ${port}`);
})

// PROCESSO PER FARE USCITA GRACEFUL 

process.on('SIGINT', () => {
    console.log('Uscita graceful');
    server.close();
});