// @flow
const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const Schema = mongoose.Schema

const options = '_id username email avatar_url'

const userSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    avatar_url: {
      type: String,
      default: 'https://www.shareicon.net/data/128x128/2016/09/02/824411_man_512x512.png'
    },
    key: {
      type: String,
      unique: true,
      default: null
    },
    local: {
      password: {
        type: String,
        select: false,
        default: null
      }
    },
    facebook: {
      id: {
        type: String,
        default: null
      },
      token: {
        type: String,
        default: null
      },
      name: {
        type: String,
        default: null
      }
    },
    twitter: {
      id: {
        type: String,
        default: null
      },
      token: {
        type: String,
        default: null
      },
      displayName: {
        type: String,
        default: null
      },
      username: {
        type: String,
        default: null
      }
    },
    google: {
      id: {
        type: String,
        default: null
      },
      token: {
        type: String,
        default: null
      },
      name: {
        type: String,
        default: null
      }
    }
  }
)

let User = module.exports = mongoose.model('User', userSchema)

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

// update infos
module.exports.updateInfos = (callback) => {
  User.update({}, {multi: true}, callback)
}

// generating a hash
userSchema.methods.generateHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

// checking if password is valid
userSchema.methods.validPassword = (password) => {
  return bcrypt.compareSync(password, this.local.password)
}
