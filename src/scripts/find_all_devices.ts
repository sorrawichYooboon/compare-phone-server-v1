import { MongoClient } from "mongodb";

const uri = process.env.DEVICES_DATABASE_URL || ""
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();

    const database = client.db("FLOWECH_DEVICES_DB");
    const collection = database.collection("devices");

    const devices = await collection.find().toArray();
    console.log(devices);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

main();
