//Express Import
const express = require('express');
const cors = require('cors');

//Usage of express in server
const server = express();

//import posts-router
const postRouter = require('./posts/posts-router.js')

//Express Router
server.use(express.json());
server.use(cors());
server.use('/api/posts', postRouter)

//GET - Server
server.get('/' , (req,res) => {
    res.send (`<h2>Posts API is working!</h2>`)
})

//export express
module.exports = server;