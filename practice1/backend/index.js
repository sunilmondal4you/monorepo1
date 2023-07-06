import express from "express";
import { insertOneColl, readAll, readOneData } from "dbmon";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/users/one", readOneData);
app.get("/users/all", readAll);
app.post("/users/new", insertOneColl);

app.listen(3000, () => console.log("Port 3000 Started..."));
