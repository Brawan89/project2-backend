const express = require("express");
const {createUser,loginUser,getAllUsers , gitUser , upUser , deleuser} = require("./../controller/users");

const useRouter = express.Router();


useRouter.post("/signupUser" , createUser)
useRouter.post("/loginUser" , loginUser)
useRouter.get("/allusers" , getAllUsers)
useRouter.get('/user' , gitUser)
useRouter.put("/upduser/:id" , upUser)
useRouter.delete("/deluser" , deleuser)
module.exports = useRouter;
