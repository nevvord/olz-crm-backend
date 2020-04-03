module.exports = (req, res) => {
    const _id = req.params.id
    db.Callers.findOne({_id}, (error, call) => {
            if (error) return res.status(500).send({msg: "Ошибка 500.4"})
            db.BusketCallers.create({...call}).exec((error, resultat) => {
                if (error) return res.status(500).send({msg: "Ошибка 500.6"})
                res.send({msg: "перенесенно успешно!"})
            })
        }).remove()
}