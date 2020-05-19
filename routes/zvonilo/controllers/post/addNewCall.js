module.exports = (req, res) => {
    const { phone } = req.body
    if (!phone) return res.status(500).send({msg: "Введине номер телефона"})
    db.Callers.findOne({phone}, (error, Call) => {
        if(error) {
                        console.error(error)
                        return res.status(500).send({msg: "Ошибка сервера. Неудалось сохранить запроз."})
                    }
        if (Call) return res.status(500).send({msg: "Клиент уже существует"})
        db.BasketCallers.findOne({phone}, (error, BasketCall) => {
            if(error) {
                        console.error(error)
                        return res.status(500).send({msg: "Ошибка сервера. Неудалось сохранить запроз."})
                    }
            if (BasketCall) {
                const body = {
                    phone: BasketCall.phone,
                    name: BasketCall.name,
                    email: BasketCall.email,
                    firm: BasketCall.firm,
                    notes: BasketCall.notes,
                    reminder: BasketCall.reminder,
                    status: 3,
                    type: BasketCall.type,
                    date: Date.now()
                }
                db.Callers.create(body , error => {
                    if(error) {
                        console.error(error)
                        return res.status(500).send({msg: "Ошибка сервера. Неудалось сохранить запроз."})
                    }
                    db.BasketCallers.deleteOne({ phone }, error => {
                        if(error) {
                        console.error(error)
                        return res.status(500).send({msg: "Ошибка сервера. Неудалось сохранить запроз."})
                    }
                        return res.send({msg: "Клиент находился в корзине и был из нее перемещен!"})
                    })
                })
            }else{
                db.Callers.create(req.body, error => {
                    if(error) {
                        console.error(error)
                        return res.status(500).send({msg: "Ошибка сервера. Неудалось сохранить запроз."})
                    }
                    return res.send({msg: "Клиент успешно добавлен!"})
                })
            }
        })
    })
}