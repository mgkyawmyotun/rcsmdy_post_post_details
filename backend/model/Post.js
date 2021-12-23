const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
  title: String,
  body: String,
  author: { type: String, default: 'Kyaw Myo Tun' },
  created_at: { type: Date, default: new Date() },
});
const Post = mongoose.model('Post', postSchema);
exports.Post = Post;
