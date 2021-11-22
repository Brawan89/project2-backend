const express = require("express");
const {createUser,getAllUsers , gitUser , upUser , deleuser} = require("./../controller/users");

const useRouter = express.Router();

useRouter.get("/" , getAllUsers)
useRouter.get('/userName' , gitUser)
useRouter.post("/create" , createUser)
useRouter.put("/upduser/:id" , upUser)
useRouter.delete("/deluser" , deleuser)
module.exports = useRouter;