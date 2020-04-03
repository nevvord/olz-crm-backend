module.exports = (req, res) => {
    db.Callers.find({}).exec((error, resultat) => {
        if (error) return res.status(500).send({msg: "Ошибка 500. Не смог найти новые звонки или сделал это с ошибкой."})
        return res.send({calls: resultat})
    })
}