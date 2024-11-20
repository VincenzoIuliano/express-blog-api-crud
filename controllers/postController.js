const posts = require('../data/posts')

// index

function index(req,res) {
    // res.send('Ecco l\'elenco dei post!');
    res.json(posts)
}

// show 
function show(req,res) {
    const {id} = req.params;
    // res.send(`Ecco il post con id: ${id}`);
    if (id > posts.length) {
        res.status(404);
        res.json({
           err: 'post not found' 
        });
    } else {
        res.json(posts[id]);
    }
}

// store 
function store(req,res) {
    res.send('Creazione di un nuovo post');       
}

// update 
function update(req,res) {
    const id = req.params.id
    res.send(`Modifica integrale del post ${id}`)
}

// modify 
function modify(req,res) {
    const id = req.params.id
    res.send(`Modifica parziale del post ${id}`)
}

// destroy 
function destroy(req,res) {
    const id = req.params.id
    res.send(`Rimozione del post ${id}`)
}

module.exports = { index, show, store, update, modify, destroy }

