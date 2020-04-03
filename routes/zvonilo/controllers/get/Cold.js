module.exports = (req, res) => {
     db.Callers
        .find({type: 2})
        .sort({date: -1})
        .exec((error, resultat) => {
            if (error) return res.status(500).send({msg: "Ошибка 500. Поиск дал угла.бит...пииии.п."})
            return res.send({msg: "Поиск успешин", resultat})
        })
}