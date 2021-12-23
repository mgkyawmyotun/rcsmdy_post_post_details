var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const { Post } = require('../model/Post');
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find({});
    res.json(posts);
  } catch (error) {
    req.status(500).json({ error: 'Internal Error' });
  }
});

router.get('/:id', async (req, res) => {
  const isValid = mongoose.Types.ObjectId.isValid(req.params.id);
  if (isValid) {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } else {
    res.status(400).json({ error: 'Not a valid object Id' });
  }
});
router.post('/create', async (req, res) => {
  if (req.body.title && req.body.body) {
    const post = new Post({
      title: req.body.title,
      body: req.body.body,
      author: req.body.author,
    });
    try {
      await post.save();
      res.json({ response: 'Created Sucessfull' });
    } catch (error) {
      res.status(500).json({ error: 'Error At Creation Post' });
    }
  }
  // const post =
});

module.exports = { router };
