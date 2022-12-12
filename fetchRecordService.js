const client = require('./connection');

const fetchCollection = client.db('employee').collection('comments');
const documents = async function () {
	return await fetchCollection.find({}).toArray();
}

module.exports = documents;