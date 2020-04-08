module.exports = (req, res) => {
    const { type } = req.body
    const _id = req.params.id
    db.Callers.updateOne({_id}, {$set: { type }}, (error, resultat) => {
        if (error) return res.status(500).send({msg: "Ошибка при изменении ствтцса клиента!"})
        res.send({msg: "Тип изменен успешно!"})
    })
}