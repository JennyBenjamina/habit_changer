const express = require('express');
const User = require('../schemas/user.js');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.use(express.json());

router.post('/register', (req, res) => {
  User.findOne({ username: req.body.username }, (err, result) => {
    if (!err) {
      if (!result) {
        let newUser = new User(req.body);

        newUser.save((err, result) => {
          if (!err) {
            res.status(200).send(result);
          } else {
            res.status(400).send(err);
          }
        });
      } else {
        res.status(400).send('This account exists! Please login!');
        // res.status(400).send(result);
      }
    } else {
      res.status(400).send(err);
    }
  });
});

router.post('/', (req, res) => {
  User.findOne({ email: req.body.email }, (err, result) => {
    if (!err) {
      if (result) {
        bcrypt.compare(
          req.body.password,
          result.password,
          (error, bcresult) => {
            if (bcresult) {
              let payLoad = {
                _id: result._id,
                role: result.role,
              };

              let token = jwt.sign(payLoad, process.env.JWTKEY || '12345678');
              res.status(200).send({
                jwt: token,
              });
            } else {
              res.status(400).send('Invalid email/password121`2');
            }
          }
        );
      } else {
        console.log('not found');
        res.status(400).send('Invalid email/password44455');
      }
    } else {
      res.status(400).send('Invalid email/password555');
    }
  });
});

module.exports = router;
