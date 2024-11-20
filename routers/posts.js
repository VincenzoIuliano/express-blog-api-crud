const express = require('express')
const router = express.Router();
const posts = require('../data/posts')


// CRUD sulla risorsa post 

// index 
router.get('/',(req,res) => {
    // res.send('Ecco l\'elenco dei post!');
    res.json(posts)
})

// show 
router.get('/:id',(req,res) => {
    const {id} = req.params;
    // res.send(`Ecco il post con id: ${id}`);
    if (id > posts.length) {
        //res.status(404);
        res.json({
           err: 'post not found' 
        });
    } else {
        res.json(posts[id]);
    }
})

// store 
router.post('/', (req,res) => {
    res.send('Creazione di un nuovo post');       
})

// update 
router.put('/:id',(req,res) => {
    const id = req.params.id
    res.send(`Modifica integrale del post ${id}`)
})

// modify 
router.patch('/:id',(req,res) => {
    const id = req.params.id
    res.send(`Modifica parziale del post ${id}`)
})

// destroy 
router.delete('/:id',(req,res) => {
    const id = req.params.id
    res.send(`Rimozione del post ${id}`)
})

module.exports = router ;