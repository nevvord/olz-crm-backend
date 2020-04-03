module.exports = (req, res) => {
    db.Callers.create(req.body , error => {
        if(error) return res.status(500).req({msg: "Ошибка сервера. Неудалось сохранить запроз."})
        return res.send({msg: "Запрос успешно сохранен!"})
    })
}