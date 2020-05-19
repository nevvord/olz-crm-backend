module.exports = (mongoose, connection) =>
  connection.model('SubCategories', new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    titleEn: String,
    titleRu: String,
    titleUa: String,
    date: {type: Date, default: Date.now},
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'Categories'},
    confirmed: {type: Boolean, default: false},
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'Users'},
    characteristics: Array,
    created: {type: Boolean, default: false}
  }))