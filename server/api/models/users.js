// @flow
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const options = '_id username email avatar_url'

const userSchema = new Schema(
  {
    _id: {
      type: Schema.ObjectId
    },
    username: {
      type: String,
      match: /[a-zA-Z0-9]/,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      select: false,
      required: true
    },
    avatar_url: {
      type: String,
      default: 'https://www.shareicon.net/data/128x128/2016/09/02/824411_man_512x512.png'
    }
  }
)

const User = module.exports = mongoose.model('User', userSchema)

// get all users -> probably not useful
module.exports.getUsers = (callback, limit) => {
  User.find({}, callback).limit(limit)
}

// get user by id
// send the id username and email
module.exports.getUserById = (id, callback) => {
  User.findById(id, options, callback)
}

// get user by name
// send the id username and email
module.exports.getUserByName = (username, callback) => {
  User.findOne({username: username}, options, callback) // return null if none!
}

// add new user to the DB
module.exports.addUser = (user, callback) => {
  User.create(user, callback)
}

// delete user from the DB
module.exports.deleteUser = (user, callback) => {
  User.remove({_id: user}, callback)
}

// update username
module.exports.updateInfos = (update, callback) => {
  User.findOneAndUpdate({username: update.old_username}, {username: update.new_username}, {multi: false}, callback)
}
