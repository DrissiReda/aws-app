// @flow
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
app.use(bodyParser.json())

app.listen(5000)

const Users = require('../models/users')
const Tweets = require('../models/tweets')
//modified the name 
const dbconfig= require('../../config/db.js')
mongoose.connect('mongodb://' +dbconfig.mongodbUser+':'+dbconfig.mongodbPass+'@'
  +dbconfig.mongodbHost + ':'+dbconfig.port+'/'+dbconfig.name, function (err) {
  if (err) throw err
})

const db = mongoose.connection

db.once('open', () => {
  console.log('connected')
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// send all tweets
app.get('/api/tweets', (req, res) => {
  Tweets.getTweets((err, tweets) => {
    if (err) throw err
    res.json(tweets)
  })
})

// send all tweets by an user
app.get('/api/tweets/:userId', (req, res) => {
  Tweets.getTweetsByUser(req.params.userId, (err, tweets) => {
    if (err) throw err
    res.json(tweets)
  })
})

// send all users
app.get('/api/users', (req, res) => {
  Users.getUsers((err, users) => {
    if (err) throw err
    res.json(users)
  })
})

// send user matching the id
app.get('/api/users/:_id', (req, res) => {
  Users.getUserById(req.params._id, (err, user) => {
    if (err) throw err
    res.json(user)
  })
})

// send user info for the name in the url
app.get('/api/users/find/:username', (req, res) => {
  Users.getUserByName(req.params.username, (err, user) => {
    if (err) throw err
    res.json(user)
  })
})

// create new user
app.post('/api/signup', (req, res) => {
  let newUser = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  }
  Users.addUser(newUser, (err, user) => {
    if (err) throw err
    res.json(user)
  })
})

// create a new tweet
app.post('/api/tweets', (req, res) => {
  let tweet = req.body
  Tweets.tweet(tweet, (err, tweet) => {
    if (err) throw err
    res.json(tweet)
  })
})

app.get('/api/update', (req, res) => {
  Users.updateInfos((err) => {
    if (err) throw err
    res.send('updated')
  })
})
