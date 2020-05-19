module.exports = async (req, res) => {
    const user = await db.Users.findOne({_id: req.userID})
    if(!user) return res.status(500).send({msg: "Невероятная ошибка. Пользователь не был найден!"})
    res.send({msg: `Добро пожаловать назад ${user.login}!`, user})
}