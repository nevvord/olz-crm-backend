module.exports = (req, res) => {
    const { phone } = req.body.apiCalls[0].calls[0]
    db.Callers.create({phone} , error => {
        if(error) return res.status(500).req({msg: "Ошибка сервера. Неудалось сохранить запроз."})
        return res.send({msg: "Запрос успешно сохранен!"})
    })
}