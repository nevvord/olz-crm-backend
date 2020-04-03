module.exports = (req, res) => {
    const _id = req.params.id
    db.Callers.updateOne({_id}, { $set: {...req.body}}, (error, resultat) => {
        if (error) return res.status(500).send({msg: "Ошибка 500. Не внес изминения."})
        return res.send({msg: "Изменения внесены упешно!"})
    })
}