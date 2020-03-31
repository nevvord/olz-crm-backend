const jwt = require('jsonwebtoken')
const { secret, user } = require('../../../config/index')

module.exports = (req, res) => {
    const { login, password } = req.body

    if (login !== user.login) return res.status(401).send({msg: "Неверное имя поьзователя"})
    if (password !== user.password) return res.status(401).send({msg: "Неверный пароль"})
    const token = jwt.sign({user: user.login}, secret)
    return res.send({token, msg: "Авторезаия успешна!"})
}