module.exports = async (req, res) => {
  const {titleRu, titleEn, titleUa, characteristics} = req.body
  const _id = req.params.id

  const subCategory = await db.SubCategories.findOne({_id})
  subCategory.titleEn = titleEn
  subCategory.titleRu = titleRu
  subCategory.titleUa = titleUa
  subCategory.characteristics = characteristics
  subCategory.confirmed = false

  const category = await db.Categories.findOne({_id: subCategory.category})
  category.confirmed = false
  category.save()


  subCategory.save().then(response => {
    res.send({msg: "Подкатегория измененна успешно.", subCategory: response})
  }).catch(error => {
    res.status(500).send({msg: "Неудалось изменить под категорию.", error})
  })
}