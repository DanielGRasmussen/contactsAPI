const MongoClient = require("mongodb").MongoClient;
const { ObjectID } = require("mongodb");
require("dotenv").config();
const url = process.env.DB_URL;
const dbName = process.env.DB_NAME;
const collectionName = process.env.COLLECTION_NAME;

async function connect() {
	const client = await MongoClient.connect(url, { useNewUrlParser: true });
	const db = client.db(dbName);
	const collection = db.collection(collectionName);
	return collection;
}

exports.post = async function post(doc) {
	const collection = await connect();
	const result = await collection.insertOne(doc);
	return result.insertedId.toString();
};

exports.getAll = async function () {
	const collection = await connect();
	const docs = await collection.find({}).toArray();
	return docs;
};

exports.getById = async function (id) {
	const collection = await connect();
	const doc = await collection.findOne({ _id: ObjectID(id) });
	return doc;
};

exports.put = async function (id, updatedDoc) {
	const collection = await connect();
	const result = await collection.updateOne({ _id: ObjectID(id) }, { $set: updatedDoc });
	if (result.matchedCount > 0) {
		return 204;
	} else {
		return 404;
	}
};

exports.delete = async function (id) {
	const collection = await connect();
	const result = await collection.deleteOne({ _id: ObjectID(id) });
	if (result.deletedCount > 0) {
		return 200;
	} else {
		return 404;
	}
};
