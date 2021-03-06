const axios = require('axios')

module.exports = async (req, res) => {
  const _id = req.params.id

  if (req.userMode !== 0) return res.status(401).send({msg: "Данная функция только для супер админа"})
  
  const subCategory = await db.SubCategories.findOne({_id})
  subCategory.confirmed = true
  
  if (!subCategory.created) {
    axios.post(`${process.env.OLZ_BE_URL}/sa/subCategory/add`, {subCategory, verifykey: process.env.VERIFY_KEY}).then(result => {
      subCategory.created = true
      subCategory.save().then(response => {
        res.send({msg: "Подкатегория подтвержденна", subCategory: response})
      }).catch(error => {
        res.status(500).send({msg: "Неудалось подтвердить подкатегорию.", error})
      })
    }).catch(error => {
      res.status(500).send({msg: "Неудаось добавить подкатегорию в БЭ ОЛЗ", error})
    })
  }

  if (subCategory.created) {    
    axios.put(`${process.env.OLZ_BE_URL}/sa/subcategory/change/${subCategory._id}`, {subCategory, verifykey: process.env.VERIFY_KEY}).then(result => {
      subCategory.save().then(response => {
        res.send({msg: "Подкатегория подтвержденна", subCategory: response})
      }).catch(error => {
        res.status(500).send({msg: "Неудалось подтвердить подкатегорию.", error})
      })
    }).catch(error => {
      res.status(500).send({msg: "Неудалось изменить категорию в БЭ ОЛЗ"})
    })
  }
  
}