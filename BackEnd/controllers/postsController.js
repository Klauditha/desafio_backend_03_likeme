const { getAllPostsData, addPost } = require('../data/posts.js');

const getAllPosts = async (req, res) => {
  const results = await getAllPostsData();
  res.send(results);
};

const createPost = async (req, res) => {
  const { titulo, url, descripcion, likes } = req.body;
  if(!titulo || !url || !descripcion || !likes) {
    res.status(400).send('Todos los campos son obligatorios');
    return;
  }
  const results = await addPost(titulo, url, descripcion, likes);
  res.send(results);
};

module.exports = {
  getAllPosts,
  createPost,
};
