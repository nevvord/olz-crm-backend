module.exports = (mongoose, conn) => conn.model('Comment', new mongoose.Schema({
  content : { type : String },
  userId : { type : mongoose.Schema.ObjectId, ref: 'User' }
}));

