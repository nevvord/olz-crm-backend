module.exports = (mongoose, conn) => conn.model('Callers', new mongoose.Schema({
  phone: { type: String, required: true },
  date: { type: Date, default: Date.now },
  name: String,
  email: String,
  firm: String,
  notes: String,
  reminder: Date,
  group: Number,
  status: Number, // 1 - Уникальный, 2 - На крючьке, 3 - Из преисподней
  type: { // 1 - Горячий, 2 - Холодный, 3 - Новые\Поступившие
    type: Number,
    default: 3
  }
}))

