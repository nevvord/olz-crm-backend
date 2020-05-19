module.exports = (mongoose, connection) =>
  connection.model('Categories', new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    titleEn: String,
    titleRu: String,
    titleUa: String,
    date: {type: Date, default: Date.now},
    subCategories: [{
      type: mongoose.Schema.Types.ObjectId, ref: 'SubCategories'
    }],
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'Users'},
    confirmed: {type: Boolean, default: false},
    created: {type: Boolean, default: false}
  }))