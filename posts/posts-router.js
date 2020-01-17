const express = require('express');

const Db = require('../data/db.js');

const router = express.Router();

//GET 
router.get('/', (req,res) => {
    Db.find()
    .then(posts => {
        res.status(200).json(posts);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            message: "The posts information could not be retrieved.",
        });
    });
});

router.get('/:id', (req,res)=> {
Db.findById(req.params.id)
.then(posts => {
    if(posts) {
        res.status(200).json(posts);
    }
    else {
        res.status(404).json({ message: "The post with the specified ID does not exist." })
    }
})
.catch(err => {
    res.status(500).json({ error: "The post information could not be retrieved.", err })
})
})

router.get('/:id/comments', (req,res)=> {
Db.findCommentById(req.params.id)
.then(posts => {
    if(posts) {
        res.status(200).json(posts)
    } 
    else {
        res.status(404).json({ message: "The post with the specified ID does not exist." })
    }
})
.catch(err => {
    res.status(500).json({ error: "The comments information could not be retrieved.", err })
})
})

//POST 
router.post('/', (req,res) => {
    const postDes = req.body
    if (!postDes.title || !postDes.contents) {
        res.status(400).json({error: 'Enter title and contents for this post.' });
    }
    else {
    Db.insert(postDes)
    .then(posts => {
        res.status(201).json(posts)
    })
    .catch(err => {
        res.status(500).json({ message: "There was an error while saving the post to the database", err })
    })
}
})

router.post('/:id/comments', (req, res) => {
    const postsInfo = req.body
    postsInfo.post_id = req.params.id
    Db.insertComment(postsInfo)
    .then(posts => {
        if(posts.length === 0){
            res.status(404).json({message: "The post with the specified ID does not exist."})
        } else if (postsInfo.text === ''){
            res.status(400).json({Message: "Please provide text for the comment." })
        }else{
            res.status(201).json(posts)
        }
    })
    .catch(error => {
        res.status(500).json({message: "There was an error while saving the comment to the database", error })
    })
})
   


//PUT 
router.put('/:id', (req,res) => {
const changes = req.body;
Db.update(req.params.id, changes)
.then(posts => {
    if(!posts) {
        res.status(404).json({ message: "The post with the specified ID does not exist." })
    }
    else if(!changes.title || !changes.contents) {
        res.status(400).json({ errorMessage: "Please provide title and contents for the post." })
    }
    else {
        res.status(200).json(posts)
    }
})
.catch(err => {
    res.status(500).json({ error: "The post information could not be modified." , err })
})
})
//DELETE
router.delete('/:id', (req,res)=> {
Db.remove(req.params.id)
.then(posts => {
    if(!posts) {
        res.status(404).json({ message: "The post with the specified ID does not exist." })
    }
    else {
        res.status(200).json({ message: "The post has been removed."})
    }
})
.catch(err => {
    res.status(500).json({ error: "The post could not be removed", err })
})
    })

module.exports = router