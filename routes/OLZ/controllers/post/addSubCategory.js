const { Types } = require('mongoose')
module.exports = async (req, res) => {
  const titleEn = req.body.titleEn
  const titleRu = req.body.titleRu
  const titleUa = req.body.titleUa
  const category = req.body.category
  const characteristics = req.body.characteristics
  const author = req.userID

  const subcategory = await new db.SubCategories({
    titleEn, titleRu, titleUa, category, characteristics, author,
    _id: new Types.ObjectId()
  })
  subcategory.save().then( async result => {
    const curCategory = await db.Categories.findOne({_id: category})
    curCategory.subCategories.push(subcategory._id)
    await curCategory.save().then(result => {
      res.send({ msg: "Под каткгория добавленна успешно", subcategory })
    }).catch((err) => {
      res.status(500).send({ msg: "Неудалось сохранить подкатегорию", err })
    })
  }).catch((err) => {
    res.status(500).send({ msg: "Неудалось сохранить подкатегорию", err })
  })
}