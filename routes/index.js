var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var config = require('../config');
var transporter = nodemailer.createTransport(config.mailer);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Code4Share -  a platform for sharing code' });
});

router.route('/contact')
.get(function(req, res, next) {
  res.render('contact', { title: 'Code4Share -  a platform for sharing code' });
})
.post(function(req,res,next) {
  req.checkBody('name','Invalid name').notEmpty();
    req.checkBody('email','Invalid email').isEmail();
  req.checkBody('message','Empty Message').notEmpty();
  var errors = req.validationErrors();

  if(errors) {
    res.render('contact', {
      title : 'Code4Share -  a platform for sharing code',
      name : req.body.name,
      email : req.body.email,
      message : req.body.message,
      errorMessages : errors
    }) 
  } else {

      var mailOptions = {
        from : 'code4share <no-reply@code4share.com>',
        to : 'harshita27apr@gmail.com',
        subject : 'You got a new message from visitor',
        text : req.body.message
      }

      transporter.sendMail(mailOptions , function(error,info) {
        if(error) {
          console.log(error);
        }
        else {
          res.render('thankyou', {title : 'abc'})
        }
      });
    }
});

module.exports = router;
