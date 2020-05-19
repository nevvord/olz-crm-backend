const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = async (req, res, next) => {
    if (req.headers.ss === process.env.SUPER_SECRET) {
        req.ss = req.headers.ss.toString()
        return next()
    }
    if (!req.headers.authorization) return res.status(401).send({msg: "Нет токена"})
    let token = req.headers.authorization.split(' ')[1]
    if (token === "undefined" || token === "null") return res.status(401).send({msg: "Авторезируйтесь для продолжения работы"})
    let payload = await jwt.verify(token, process.env.SECRET_KEY)
    if (!payload) return res.status(401).send({msg: "Неверный токен"})
    let user = await db.Users.findOne({ _id: payload._id})
    if (!user) return res.status(401).send({msg: "Данного ююзера не существует =("})
    req.userID = payload._id
    req.userMode = user.mode
    next()
}