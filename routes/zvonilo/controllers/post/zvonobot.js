module.exports = (req, res) => {
    const { phone } = req.body

    console.log(req.headers);
    
    
    db.Callers.create({phone} , error => {
        if(error) return res.status(500).req({msg: "Ошибка сервера. Неудалось сохранить запроз."})
        return res.send({msg: "Запрос успешно сохранен!"})
    })
}