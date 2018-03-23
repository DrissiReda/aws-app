// @flow
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const router = express.Router()

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended: true}))
const Tweet = require('../models/tweets')

/*
 send all tweets in the DB
 GET /api/tweets
 {
  _id: String
  content: String
  author:
    {
      _id,
      username,
      email,
      avatar_url
  },
  date: Date
 }
 */
router.get('/', (req, res) => {
  Tweet.find().populate('user').exec().then(docs => {
    res.status(200).json(docs)
  }).catch(err => {
    res.status(500).json({
      error: err
    })
  })
})

/*
 send all tweets by an user
 GET /api/tweets/(userId)
 {
  _id: String,
  content: String,
  username/author:
    {
      _id,
      username,
      email,
      avatar_url
  },
  date: Date
 }
 */
router.get('/:userId', (req, res) => {
  const userId = req.params.userId
  Tweet.find({user: {'_id': userId}}).populate('user').exec().then(docs => {
    res.status(200).json(docs)
  }).catch(err => {
    res.status(500).json({
      error: err
    })
  })
})

/*
 create a new tweet
 POST /api/tweets
 {
  content: String
  authorId: String
 }
 */
router.post('/', (req, res) => {
  const tweet = new Tweet({
    _id: new mongoose.Types.ObjectId(),
    content: req.body.content,
    user: req.body.authorId
  })
  tweet.save().then(result => {
    res.status(201).json({
      message: 'Tweet posted',
      createdTweet: result
    })
  }).catch(err => {
    res.status(500).json({
      error: err
    })
  })
})

/*
 delete an existing tweet
 POST /api/tweets
 {
  tweetId: String
 }
 */
router.delete('/', (req, res) => {
  const tweetId = req.body.tweetId
  Tweet.remove({_id: tweetId}).exec().then(result => {
    res.status(200).json(result)
  }).catch(err => {
    res.status(500).json({
      error: err
    })
  })
})

module.exports = router
