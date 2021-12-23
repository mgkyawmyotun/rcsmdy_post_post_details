const express = require('express');
const mongoose = require('mongoose');
const postRoute = require('./routes/post.route');
require('dotenv').config();
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
  app.listen(process.env.PORT || 1337, () => {
    console.log(`Listening on port ${process.env.PORT || 1337}`);
  });
}
const app = express();
app.use(express.json());

app.use('/post', postRoute.router);
