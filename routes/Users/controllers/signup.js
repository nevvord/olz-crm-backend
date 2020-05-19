require('dotenv').config()
const bcryptjs = require('bcryptjs')
const { SECRET_KEY, SUPER_SECRET } = process.env
const { Types } = require('mongoose')

module.exports = async (req, res) => {
  const login = req.body.login.toString()
  const password = req.body.password.toString()
  const accesses = req.body.accesses
  const secretKey = req.body.sc
  const superSecret = req.body.ss
  const mode = req.body.mode

  if(SECRET_KEY !== secretKey) {
    return res.status(500).send({msg: "Неверный секретный ключ"})
  }
  const salt = await bcryptjs.genSalt(10)
  if(!salt) return res.status(500).send({msg: "Неудалось сгенерировать соль"})
  const hash = await bcryptjs.hash(password, salt).catch(error => {
    console.error(error)
  })
  if(!hash) return res.status(500).send({msg: "Неудалось закодировать пароль"})
  const user = await new db.Users({
    _id: new Types.ObjectId(),
    login,
    password: hash,
    accesses,
    mode
  })
  if(SUPER_SECRET === superSecret) {
    user.accesses = ['admin']
    return await user.save().then((resultat) => {
      res.send({user: resultat, msg: "Пользователь успешно добавлен"})
    }).catch((error) => {
      res.status(500).send({
        msg: "Ошибка сервера. Неудалось схранить пользователя SS",
        error
      })
    })
  }else{
    user.creator = req.userID
    await user.save()
    const newUser = await db.Users.findOne({_id: user._id}).populate('creator')
    res.send({user: newUser, msg: "Пользователь успешно добавлен"})
  }
}