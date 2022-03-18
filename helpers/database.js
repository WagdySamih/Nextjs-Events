const { MongoClient } = require('mongodb');
const MONGODB_URL = process.env.MONGODB_URL

export const connect = async () => {
  try {

    const url = MONGODB_URL;
    const client = new MongoClient(url);
    await client.connect();
    return client

  } catch (e) {
    throw ("error connecting to database")
  }
}

export const close = async (client) => {
  try {
    await client.close()
  } catch (error) {
    throw ("error closing database connection")
  }
}
