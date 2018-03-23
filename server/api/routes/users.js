// @flow
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended: true}))
const User = require('../models/users')

/*
 send all users
 GET /api/users
 {
  _id: String
  username: String
  email: String
  avatar_url: String
 }
 */
router.get('/', (req, res) => {
  User.find().exec().then(docs => {
    res.status(200).json(docs)
  }).catch(err => {
    res.status(500).json({
      error: err
    })
  })
})

/*
 send user matching the id
 GET /api/users/(userId)
 {
  id: String
  username/author: String
  email: String
  avatar_url: String
 }
 */
router.get('/:id', (req, res) => {
  const userId = req.params.id
  User.find({'_id': userId}).exec().then(docs => {
    res.status(200).json(docs)
  }).catch(err => {
    res.status(500).json({
      error: err
    })
  })
})

/*
 send user info for the name in the url
 GET /api/users/find/(username)
 {
  _id: String
  username/author: String
  email: String
  avatar_url: String
 }
 */
router.get('/find/:username', (req, res) => {
  const username = req.params.username
  User.find({'username': username}).exec().then(docs => {
    if (docs) res.status(200).json(docs)
    else {
      res.status(204).json({
        message: 'No data found'
      })
    }
  }).catch(err => {
    res.status(500).json({
      error: err
    })
  })
})

/*
 create new user
 POST /api/users/signup
 {
  username: String
  email: String
  password: String
 }
 */
router.post('/signup', (req, res) => {
  const newUser = new User({
    _id: new mongoose.Types.ObjectId(),
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
  newUser.save().then(result => {
    res.status(201).json({
      message: 'User created',
      createdTweet: result
    })
  }).catch(err => {
    res.status(500).json({
      error: err
    })
  })
})

/*
 update user infos
 PATCH /api/users/update/username
 [
  {
    fieldName: name of the field
    value: new value
  },
  {
    fieldName: name of the field
    value: new value
  },
  ...
 ]
 fieldName is the field you want to update
 you can update as many fields as you want (1 to number of field)
 */
router.patch('/update/:userId', (req, res) => {
  const id = req.params.userId
  const operations = req.body
  const update = {}
  for (const op of operations) {
    update[op.fieldName] = op.value
  }
  User.update({_id: id}, {$set: update}).exec().then(result => {
    res.status(200).json(result)
  }).catch(err => {
    res.status(500).json({
      error: err
    })
  })
})

/*
 delete user
 DELETE /api/users/delete
 {
  userId: String
 }
 */
router.delete('/delete/', (req, res) => {
  const userId = req.body.userId
  User.remove({_id: userId}).exec().then(result => {
    res.status(200).json(result)
  }).catch(err => {
    res.status(500).json({
      error: err
    })
  })
})

module.exports = router
