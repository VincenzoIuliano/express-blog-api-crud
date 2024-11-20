const posts = require('../data/posts')

// index
function index(req,res) {
    // console.log('Ecco l\' elenco dei post:')

        if(req.query.tag) {
            console.log(`Stampiamo solo i post con il tag: ${req.query.tag}`)
        
        const filteredPost = posts.includes((post) => {
            return post.tags.includes(req.query.tag)
        })

        console.log(filteredPost);
        
        };

    res.json(posts)
}

// show 
function show(req,res) {
    const id = parseInt(req.params.id);
    
    // res.send(`Ecco il post con id: ${id}`);
    if (id > posts.length) {
        res.status(404);
        res.json({
           err: 'post not found' 
        });
    } else {
        
        const post = posts.find((el) => el.id === id)

        res.json(post)
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
    const id = parseInt(req.params.id)
    console.log(`Rimozione del post ${id}`);
    
    const postIndex = posts.findIndex((post) => post.id === id)  

    if (postIndex === -1) {
        res.status(404)

        return res.json({
            error: 'Post not found',
            message: 'Il post non è stat trovato!',
        })
    }
    
    posts.splice(postIndex, 1)
    console.log(posts)

    res.sendStatus(204)
}

module.exports = { index, show, store, update, modify, destroy }

