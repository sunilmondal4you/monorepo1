import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";

export const readUtils = async () => {
  const client = new MongoClient(uri);
  const userCollection = client.db("practice").collection("users");

  const userDocument = await userCollection.findOne();

  client.close();
  return userDocument;
};

export const readAll = async () => {
  const client = new MongoClient(uri);
  const userCollection = client.db("practice").collection("users");

  const userList = await userCollection.find({}).toArray();

  client.close();
  return userList;
};
