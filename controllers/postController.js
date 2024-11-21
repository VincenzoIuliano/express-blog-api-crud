const posts = require("../data/posts");


// index
function index(req, res) {
  // console.log('Ecco l\' elenco dei post:')

  if (req.query.tag) {
    console.log(`Stampiamo solo i post con il tag: ${req.query.tag}`);

    let filteredPost = [];


    for (let i = 0; i < posts.length; i++) {
      
      if (posts[i].tags.includes(req.query.tag)) {
        filteredPost.push(posts[i]);
      } 
    }
    
    console.log(filteredPost);
    if (filteredPost.length > 0) {
        res.json(filteredPost)
    } else {
        res.json(`Non ho trovato post con il tag: ${req.query.tag}`);
    }
  }

  res.json(posts)
}

// show
function show(req, res) {
  const id = parseInt(req.params.id);

  // res.send(`Ecco il post con id: ${id}`);
  if (id > posts.length) {
    res.status(404);
    res.json({
      err: "post not found",
    });
  } else {
    const post = posts.find((el) => el.id === id);

    res.json(post);
  }
}

// store
function store(req, res) {
    
  const newId = posts[posts.length -1].id +1 ;

  const newPost = {
    id: newId,
    title: req.body.title,
    slug: req.body.slug, 
    content: req.body.content,
    image: req.body.image,
    tags: req.body.tags
  }

  posts.push(newPost);

  console.log(posts)

  res.status(201);
  res.json(newPost);

}

// update
function update(req, res) {
  const id = parseInt(req.params.id);
  
  const post = posts.find((el) => el.id === id)

  if (!post) {
    res.status(404);

    return res.json({
      error: "not found",
      message: "post non trovato"
    })
  }

  post.title= req.body.title,
  post.slug= req.body.slug, 
  post.content= req.body.content,
  post.image= req.body.image,
  post.tags= req.body.tags

  console.log(posts);

  res.json(post)
  
}

// modify
function modify(req, res) {
  const id = req.params.id;
  res.send(`Modifica parziale del post ${id}`);
}

// destroy
function destroy(req, res) {
  const id = parseInt(req.params.id);
  console.log(`Rimozione del post ${id}`);

  const postIndex = posts.findIndex((post) => post.id === id);

  if (postIndex === -1) {
    res.status(404);

    return res.json({
      error: "Post not found",
      message: "Il post non è stat trovato!",
    });
  }

  posts.splice(postIndex, 1);
  console.log(posts);

  res.sendStatus(204);
}

module.exports = { index, show, store, update, modify, destroy };
