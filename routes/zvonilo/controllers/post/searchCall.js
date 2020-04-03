module.exports = (req, res) => {
    const { search } = req.body

    db.Callers
        .find({ $or:[{ phone: search }, { name: search }, { firm: search }] })
        .exec((error, resultat) => {
            if (error) return res.status(500).send({ msg: "Ошибка сервера.", error })
            return res.send({resultat})
        })
}