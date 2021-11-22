const userModel = require("./../../db/models/userSchema");

//git all users
const getAllUsers = (req, res) => {
    userModel
      .find({})
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.send(err);
      });
  };

//git user by name
const gitUser = (req,res) => {
    const {userName} = req.body;
    userModel
    .findOne({userName: userName})
    .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.send(err);
      });
}

//create users
const createUser = (req, res) => {
  const { userName, email, passward, isDeleted, phoneNumber, age } = req.body;
  const newUser = new userModel({
    userName,
    email,
    passward,
    isDeleted,
    phoneNumber,
    age,
  });
  newUser
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

//update user
const upUser = (req, res) => {     
    const { id } = req.params;  
    const { userName} = req.body;   
    userModel
    .findByIdAndUpdate({_id: id},{userName: userName})
    .then(() => {
        res.json(`Your information has been updated`)
    })
    .catch((err) => {
        res.send(err);
    })
}

//delete user
const deleuser = (req, res) => {
    const { userName } = req.body;
    userModel
    .remove({userName: userName})
    .then(() => {
        res.json("deleted")
    })
    .catch((err) => {
        res.send(err);
    })
}



module.exports = { createUser , getAllUsers , gitUser , upUser , deleuser};