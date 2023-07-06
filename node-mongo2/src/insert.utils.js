import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";

export const insertOneColl = async (newDocument) => {
  const client = new MongoClient(uri);
  const userCollection = client.db("practice").collection("users");

  const response = await userCollection.insertOne(newDocument);

  client.close();
  return response;
};
