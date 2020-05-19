module.exports = (mongoose, conn) => 
  conn.model('Users', new mongoose.Schema({
    _id: {type: mongoose.Schema.Types.ObjectId},
    name: String,
    login: String,
    email: String,
    creator: {type: mongoose.Schema.Types.ObjectId, ref: 'Users'},
    password: String,
    mode: {type: Number, default: 0}, // 0 - SuperAdmin, 1 - Admin, 2 - Worker, 3 - Demonstration
    accesses: Array,
    date: {type: Date, default: Date.now},
    settings: {
      styleMod: {type: String, default: "Default"}
    }
  }))

