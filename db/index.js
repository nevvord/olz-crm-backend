const mongoose      = require('mongoose');
const connection    = mongoose.createConnection('mongodb://localhost/test-backend-olz', { useNewUrlParser: true, useUnifiedTopology: true });

connection.on('connected',    ()    => console.log('Mongoose connection open to test2 db'));
connection.on('error',        (err) => console.log('Mongoose connection error to test2 db: ' + err));
connection.on('disconnected', ()    => console.log('Mongoose connection disconnected test2 db'));

module.exports = () => {
  console.log('Returning db...')

  return {
    connection,
    Callers : require('./models/callers.js')(mongoose, connection),
    BasketCallers : require('./models/basketCallers')(mongoose, connection),
    Users: require('./models/Users')(mongoose, connection),
    Categories: require('./models/Categories')(mongoose, connection),
    SubCategories: require('./models/SubCategories')(mongoose, connection)
  }
}