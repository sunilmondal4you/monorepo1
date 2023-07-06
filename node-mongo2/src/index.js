import express from "express";
import { readUtils, readAll } from "./read.utils.js";
import { insertOneColl } from "./insert.utils.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", async (req, res) => {
  const userColl = await readUtils();
  console.log(userColl);
  res.json(userColl);
});

app.get("/users", async (req, res) => {
  const userColl = await readAll();
  console.log(userColl);
  res.json(userColl);
});

app.get("/add", async (req, res) => {
  const newDocument = {
    userName: req.query.userName || "Sunil-Default",
    emailId: req.query.emailId || "sunil@gmail.com",
  };
  const userColl = await insertOneColl(newDocument);
  console.log(userColl);
  res.json(userColl);
});

app.post("/add", async (req, res) => {
  const newDocument = req.body;
  const userColl = await insertOneColl(newDocument);
  console.log(userColl);
  if (userColl.acknowledged) {
    userColl.success = true;
    userColl.message = "User addedd";
  }

  res.json(userColl);
});

app.listen(3000, () => console.log(`Example listening on port 3000`));
