require('dotenv').config()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { SECRET_KEY } = process.env

module.exports = async (req, res) => {
    const login = req.body.login.toString()
    const password = req.body.password.toString()

    const User = await db.Users.findOne({login})
    if (!User) return res.status(404).send({msg: "Пользователь ненайден"})
    const passwordMatch = await bcrypt.compare(password, User.password) 
    if(!passwordMatch) return res.status(401).send({msg: "Нверный пароль"})
    const token = await jwt.sign({_id: User._id}, SECRET_KEY)
    if(!token) return res.status(500).send({msg: "Ошибка сервера. Неудалось создать токен"})
    res.send({user: User, token, msg: `Добро пожаловать ${User.login}!`})
}