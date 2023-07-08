import express from "express";
import {
  createStudent,
  readAllStudent,
  readOneStudent,
} from "../dbmodule2/index.js";
import { readAllPost, readlimitedPost } from "../dbmodule2/post.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/student/one", readOneStudent);
app.get("/student/all", readAllStudent);
app.post("/student", createStudent);

//post
app.get("/post", readlimitedPost);
app.get("/post/all", readAllPost);

app.listen(3000, () => console.log("Port 3000 Started..."));
