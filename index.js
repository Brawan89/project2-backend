const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
require("./db/db");
const userRouter = require("./routers/route/users")
const quizRouter = require("./routers/route/quiz")

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config()

app.use("/user" , userRouter)
app.use("/quiz" , quizRouter)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });
