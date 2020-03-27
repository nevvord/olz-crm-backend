module.exports = (mongoose, conn) => conn.model('Callers', new mongoose.Schema({
  contentJson: String
}));

