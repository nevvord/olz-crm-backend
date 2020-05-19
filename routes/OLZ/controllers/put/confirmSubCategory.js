module.exports = async (req, res) => {
  const _id = req.params.id

  if (req.userMode !== 0) return res.status(401).send({msg: "Данная функция только для супер админа"})
  const subCategory = await db.SubCategories.findOne({_id})
  subCategory.confirmed = true
  subCategory.save().then(response => {
    res.send({msg: "Подкатегория подтвержденна", subCategory: response})
  }).catch(error => {
    res.status(500).send({msg: "Неудалось подтвердить подкатегорию.", error})
  })
}