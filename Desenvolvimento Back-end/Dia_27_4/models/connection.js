const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongo://127.0.0.1;27017';

let schema = null;

async function connection() {
  if (schema) return Promise.resolve(schema);
  return MongoClient
    .connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db('model_example'))
    .then((dbSchema) => {
      schema = dbSchema;
      return schema
    })
    .catch((err) => console.log(err));
}

module.exports = connection;