import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";

export const readOneData = async (req, res) => {
  const client = new MongoClient(uri);
  const userCollection = client.db("practice").collection("users");

  const userDocument = await userCollection.findOne();

  client.close();

  res.json(userDocument);
};

export const readAll = async (req, res) => {
  const client = new MongoClient(uri);
  const userCollection = client.db("practice").collection("users");

  const userList = await userCollection.find({}).toArray();

  client.close();

  res.json(userList);
};
