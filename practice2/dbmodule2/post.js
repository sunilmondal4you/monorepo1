import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://sunilmondal4you:pMDsz0bsygnO45Pa@cluster0.mp6v04z.mongodb.net/";

export const readlimitedPost = async (req, res) => {
  try {
    const client = new MongoClient(uri);
    const postCollection = client.db("sample_training").collection("posts");

    let { limit } = req.query;
    limit = Number(limit);
    const postList = await postCollection.find({}).limit(limit).toArray();

    client.close();

    res.json(postList);
  } catch (error) {
    res.json(error);
  }
};

export const readAllPost = async (req, res) => {
  try {
    const client = new MongoClient(uri);
    const postCollection = client.db("sample_training").collection("posts");

    const postList = await postCollection.find({}).toArray();

    client.close();

    res.json(postList);
  } catch (error) {
    res.json(error);
  }
};
