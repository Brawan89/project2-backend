const userModel = require("./../../db/models/userSchema");

//create users ( sign up)
const createUser = (req, res) => {
  const { userName, email, password, isDeleted } = req.body;
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

// login user
const loginUser = (req, res) => {
  const { email, password } = req.body;
  userModel.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password == user.password) {
        res.send({ message: "login sucess", user: user });
      } else {
        res.send({ message: "wrong credentials" });
      }
    } else {
      res.send("not register");
    }
  });
};

//logout
const logout = (req,res) =>{
  res.clearCookie("t")
  res.json({message: "logout success"})
}

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

//get user by name
const gitUser = (req, res) => {
  const { id } = req.body;
  userModel
    .findOne({ _id: id })
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
  const { userName } = req.body;
  userModel
    .findByIdAndUpdate({ _id: id }, { userName: userName })
    .then(() => {
      res.json(`Your information has been updated`);
    })
    .catch((err) => {
      res.send(err);
    });
};

//delete user
const deleuser = (req, res) => {
  const { id } = req.params;
  userModel
    .remove({ _id: id })
    .then(() => {
      res.json("Your information has been deleted");
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  createUser,
  loginUser,
  getAllUsers,
  gitUser,
  upUser,
  deleuser,
  logout
};
