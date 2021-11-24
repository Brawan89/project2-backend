const userModel = require("./../../db/models/userSchema");

//create users
const createUser = (req, res) => {
  const { userName, email, password, isDeleted} = req.body;
  const newUser = new userModel({
    userName,
    email,
    password,
    isDeleted,
  });
  newUser
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
};

const loginUser = (req, res) =>{
  try {
    let user =  userModel.findOne({
      email: req.body.email,
    });
    if (!user) {
      return res.status(200).json({
        error: true,
        message: "Incorrect Email or Password 1",
      });
    }else if(user.email==req.body.email&&user.password==req.body.password){
      return res.status(200).json({
        userID: user,
        message: "Successfull",
      });
    }
    return res.status(200).json({
      error: true,
      message: "Incorrect Email or Password 2",
    });
  } catch (error) {
    console.error(error);
    return res.status(200).json({
      error: true,
      message: "Cannot Sign up",
    });
  }
};


//************************************************ */
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
    const {id} = req.body;
    userModel
    .findOne({_id: id})
    .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.send(err);
      });
}


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
    const { id } = req.params;
    userModel
    .remove({_id: id})
    .then(() => {
        res.json("Your information has been deleted")
    })
    .catch((err) => {
        res.send(err);
    })
}



module.exports = { createUser, loginUser , getAllUsers , gitUser , upUser , deleuser};