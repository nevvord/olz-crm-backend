module.exports = (req, res) => {
    const _id = req.params.id
    db.BasketCallers.deleteOne({_id}, error => {
        if (error) return res.status(500).send({msg: "Ошибка 500.4"})
        res.send({msg: "Удаленно успешно."})
    })
}