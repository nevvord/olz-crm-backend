module.exports = (mongoose, conn) => conn.model('Callers', new mongoose.Schema({
  contentJson: String,
  date: { type: Date, default: Date.now },
  name: String,
  email: String,
  firm: String,
  notes: String,
  group: Number,
  status: Number, // 1 - Уникальный, 2 - На крючьке, 3 - Из преисподней
  type: Number // 1 - Горячий, 2 - Холодный, 3 - Новые\Поступившие
}));

