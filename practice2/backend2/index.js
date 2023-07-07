import express from "express";
import {
  createStudent,
  readAllStudent,
  readOneStudent,
} from "../dbmodule2/index.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/student/one", readOneStudent);
app.get("/student/all", readAllStudent);
app.post("/student", createStudent);

app.listen(3000, () => console.log("Port 3000 Started..."));
