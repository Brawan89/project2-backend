const express = require("express");
const app = express();
const dotenv = require("dotenv")
require("./db/db");
const userRouter = require("./routers/route/users")

app.use(express.json());

dotenv.config()

app.use("/users" , userRouter)


const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });
