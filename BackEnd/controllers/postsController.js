const { getAllPostsData, addPost } = require('../data/posts.js');

const getAllPosts = async (req, res) => {
  const results = await getAllPostsData();
  res.send(results);
};

const createPost = async (req, res) => {
  const { titulo, url, descripcion, likes } = req.body;
  const results = await addPost(titulo, url, descripcion, likes);
  res.send(results);
};

module.exports = {
  getAllPosts,
  createPost,
};
