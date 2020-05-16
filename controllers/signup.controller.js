// import db from '../modals';
// const Signup = db.signup;
// const Op = db.Sequelize.Op;

import db from '../models/index.modal';
const Signup = db.signup;
const Op = db.Sequelize.Op;

//Create and save a new Signup user

exports.create = (req, res) => {
  //validate request
  if(!req.body.name) {
    res.status(400).send({
      message: "Conrent can not be empty - Error code 400"
    });
  return;
  }

  //Create a user
  const signup = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  };

  //Save Signup - User in the database
  Signup.create(signup)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User/Singup."
      });
    });
};