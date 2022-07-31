import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
import cors from "cors";
import dotenv from 'dotenv';
const app = express();
// const dotenv = require("dotenv")

dotenv.config()

app.use(express.json());
app.use(cors());

app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.hksge.mongodb.net/Blog?retryWrites=true&w=majority`
  )
  .then(() => app.listen(8000))
  .then(() => console.log("mongoDB connected and listen to 8000"))
  .catch((err) => console.log(err));
