import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";

export const readOneStudent = async (req, res) => {
  try {
    const client = new MongoClient(uri);
    const studentCollection = client.db("practice").collection("student");

    const studentDocument = await studentCollection.findOne();

    client.close();

    res.json(studentDocument);
  } catch (error) {}
};

export const readAllStudent = async (req, res) => {
  try {
    const client = new MongoClient(uri);
    const studentCollection = client.db("practice").collection("student");

    const studentList = await studentCollection.find({}).toArray();

    client.close();

    res.json(studentList);
  } catch (error) {
    res.json(error);
  }
};

export const createStudent = async (req, res) => {
  try {
    const client = new MongoClient(uri);
    const studentCollection = client.db("practice").collection("student");

    const reqBody = req.body;
    const response = await studentCollection.insertOne(reqBody);

    client.close();

    res.json({ success: true });
  } catch (error) {
    res.json(error);
  }
};
