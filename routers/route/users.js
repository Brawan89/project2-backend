const express = require("express");
const {
  createUser,
  getAllUsers,
  logout,
  loginUser,
  gitUser,
  upUser,
  deleuser,
} = require("./../controller/users");

const useRouter = express.Router();

//
useRouter.get("/allusers", getAllUsers);

//
useRouter.post("/signupUser", createUser);
useRouter.post("/loginUser", loginUser);
useRouter.post("/logout", logout);

//
useRouter.get("/user", gitUser);
useRouter.put("/upduser/:id", upUser);
useRouter.delete("/deluser", deleuser);

//
module.exports = useRouter;
