const express = require('express');
const bodyParser = require('body-parser');
const Post = require('./models/post');
const mongoose = require('mongoose');
const { createParameter } = require('typescript');

const app = express();


mongoose.connect('mongodb+srv://ctouch:g9MW3sF7VE9UYmQ@cluster0.5by9y.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
  .then(() => {
    console.log('Connected to db');
  })
  .catch(() => {
    console.log('Connection failed');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
    );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PATCH, DELETE'
    );
  next();
})

app.post('/api/posts', (req, res, next) => {


  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });

  post.save();

  console.log(post);
  res.status(201).json({
    message: 'Post added success'
  })
})

app.get('/api/posts', (req, res, next) => {

  Post.find()
    .then(documents => {
      console.log(documents)
      res.status(200).json({
        message: 'Posts fetched success',
        posts: documents
      });
    });
});

app.delete('/api/posts/:id', (req, res, next) => {
  Post.deleteOne({_id: req.params.id})
    .then(result => {
      console.log(result);
      res.status(200).json({message: 'Post Deleted success'});
    });
});


module.exports = app;
