module.exports = (mongoose, conn) => conn.model('Callers', new mongoose.Schema({
  phone: { type: String, required: true },
  date: { type: Date, default: Date.now },
  name: {type: String, default: ''},
  email: {type: String, default: ''},
  firm: {type: String, default: ''},
  notes: {type: String, default: ''},
  reminder: {type: Date, default: ''},
  group: Number,
  status: { // 1 - Уникальный, 2 - На крючьке, 3 - Из преисподней
    type: Number, 
    default: 1
  },
  type: { // 1 - Горячий, 2 - Холодный, 3 - Новые\Поступившие
    type: Number,
    default: 3
  }
}))

