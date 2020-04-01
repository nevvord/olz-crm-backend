module.exports = (req, res) => {
    const { phone } = req.body
    
    db.Callers.create({contentJson} , error => {
        if(error){
            res.status(500).req({msg: "Ошибка сервера. Неудалось сохранить запроз."})
        }else{
            res.send({msg: "Запрос успешно сохранен!"})
        }
    })
}