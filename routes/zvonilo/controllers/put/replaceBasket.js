module.exports = (req, res) => {
    const _id = req.params.id
    db.Callers.findOne({_id}, (error, call) => {
        const body = {
            phone: call.phone,
            name: call.name,
            email: call.email,
            firm: call.firm,
            notes: call.notes,
            reminder: call.reminder,
            status: 3,
            type: call.type,
            date: call.date,

        }
        if (error) return res.status(500).send({msg: "Ошибка 500.16"})
        db.BasketCallers.create(body, (error, resultat) => {
            if (error) return res.status(500).send({msg: "Ошибка 500.18"})
            db.Callers.remove({_id: call._id}, error =>{
                if (error) return res.status(500).send({msg: "Ошибка 500.20"})
                res.send({msg: "Перенесенно успешно!"})
            })
        })
    })
}