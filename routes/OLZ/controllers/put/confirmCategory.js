const axios = require('axios')

module.exports = async (req, res) => {
  const _id = req.params.id



  if (req.userMode !== 0) return res.status(401).send({msg: "Данная функция только для супер админа"})
  
  const category = await db.Categories.findOne({_id})
  category.confirmed = true
  
  if (!category.created) {
    axios.post(`${process.env.OLZ_BE_URL}/sa/category/add`, {category, verifykey: process.env.VERIFY_KEY}).then(result => {
      category.created = true
      category.save().then(response => {
        res.send({msg: "Подкатегория подтвержденна", category: response})
      }).catch(error => {
        res.status(500).send({msg: "Неудалось подтвердить подкатегорию.", error})
      })
    }).catch(error => {
      res.status(500).send({msg: "Неудаось добавить подкатегорию в БЭ ОЛЗ", error})
    })
  }

  if (category.created) {
    axios.put(`${process.env.OLZ_BE_URL}/sa/category/change/${category._id}`, {category, verifykey: process.env.VERIFY_KEY}).then(result => {
      category.save().then(response => {
        res.send({msg: "Подкатегория подтвержденна", category: response})
      }).catch(error => {
        res.status(500).send({msg: "Неудалось подтвердить подкатегорию.", error})
      })
    }).catch(error => {
      res.status(500).send({msg: "Неудалось изменить категорию в БЭ ОЛЗ"})
    })
  }
  
}