module.exports = (mongoose, conn) => conn.model('BasketCallers', new mongoose.Schema({
  phone: {type: String, required: true },
  date: {type: Date, default: Date.now },
  name: {type: String},
  email: {type: String},
  firm: {type: String},
  notes: {type: String},
  reminder: {type: Date},
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

