const express = require('express');
const router = express.Router();
const Kweet = require('../models/Kweet')
const app = express();
const bodyParser = require('body-parser');
const createKweet = require('../functions/createKweet');
const deleteKweet = require('../functions/deleteKweet');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var jsonParser = bodyParser.json();

//Get all Kweets
router.get('/all', async (req, res) => {
    try{
        const kweets = await Kweet.find({}).exec();
        res.json(kweets)
    } catch(err){
        res.json({message: err});
    }
})

//Get kweets from user
router.get('/user/:id', async (req, res) => {
    try{
        const kweetsFromUser = await Kweet.find({"userId": req.params.id}).exec();
        res.json(kweetsFromUser)
    } catch(err){
        res.json({message: err});
    }
});

//Add Kweet 
router.post('/', jsonParser, (req, res) => {
    createKweet(req.body).save()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json({message: err})
    })
})

//Update Kweet
router.patch('/:id', jsonParser, async (req, res) => {
    try {
        const updatedKweet = await Kweet.updateOne(
            {_id: req.params.id},
            {$set: {
                text: req.body.text, 
            }}
        );
        res.json(updatedKweet)
    } catch(err) {
        console.log(err)
        res.json({message: err})
    }
})

//Delete Kweet
router.delete('/:id', async (req, res) => {
    try {
        const user = await Kweet.findById(req.params.id).exec()
        const removedKweet = await Kweet.deleteOne({_id: req.params.id});
        deleteKweet(user.userId)
        res.json(removedKweet)
    } catch(err) {
        res.json({message: err})
    }
})


module.exports = router;