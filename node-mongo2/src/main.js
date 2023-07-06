import { sumNumber } from "./sum-number.js";
import { readUtils } from "./read.utils.js";
import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";

async function main() {
  const userColl = await readUtils();
  console.log(userColl);
}

main();
