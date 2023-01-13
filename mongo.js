const MongoClient = require("mongodb").MongoClient;
const { ObjectID } = require("mongodb");
require("dotenv").config();
const url = process.env.DB_URL;
const dbName = process.env.DB_NAME;
const collectionName = process.env.COLLECTION_NAME;

let client;
async function connect() {
    client = await MongoClient.connect(url, { useNewUrlParser: true });
}

exports.insert = async function insert(docs) {
    await connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    collection.insertMany(docs)
}

exports.get = async function get() {
    await connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const docs = await collection.find({}).toArray();
    return docs;
}

exports.getById = async function getById(id) {
    await connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const docs = await collection.findOne({ _id: ObjectID(id) });
    return docs;
}