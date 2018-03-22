//FIXME redirect buttons to proxy routes in order to add instructions before
// redirection

const    express = require('express')
const    logger = require('morgan')
const    cookieParser = require('cookie-parser')
const    bodyParser = require('body-parser')
const    methodOverride = require('method-override')
const    session = require('express-session')
const    mongoose = require('mongoose')
const    passport = require('passport')
const    dbconfig=require('../../config/db.js')
const    app = express()

//===============EXPRESS================
// Configure Express
app.use(logger('combined'))
mongoose.connect('mongodb://' +dbconfig.mongodbUser+':'+dbconfig.mongodbPass+'@'
  +dbconfig.mongodbHost + ':'+dbconfig.port+'/'+dbconfig.name)
app.use(cookieParser('doesthisreallymatterdoesthislifereallymatter'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(session({secret: 'doesthisreallymatterdoesthislifereallymatter', saveUninitialized: true, resave: true}))
app.use(passport.initialize())
app.use(passport.session())

// Session-persisted message middleware
app.use(function(req, res, next){
  var err = req.session.error,
      msg = req.session.notice,
      success = req.session.success;

  delete req.session.error;
  delete req.session.success;
  delete req.session.notice;

  if (err) res.locals.error = err;
  if (msg) res.locals.notice = msg;
  if (success) res.locals.success = success;

  next();
});

// Configuring express to use handlebars templates

//===============PASSPORT===============

require('./passport')(passport);

//===============ROUTES===============
require('./routes.js')(app,passport);

//===============PORT=================
var port = process.env.PORT || 5000;
app.listen(port);
console.log("listening on " + port + "!");
