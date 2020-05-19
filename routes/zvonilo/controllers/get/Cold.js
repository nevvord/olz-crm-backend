module.exports = async (req, res) => {
    const pagination = Number(req.params.pagination)
    const skip = Number(req.params.skip)
    const calls = await db.Callers.find({type: 2}).sort({date: -1}).skip(skip).limit(pagination)
    if (!calls) return res.status(500).send({msg: "Ошибка 500. Не смог найти новые звонки или сделал это с ошибкой."})
    return res.send({calls})
}