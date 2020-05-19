const {Types} = require('mongoose')
module.exports = async (req, res) => {
  const titleEn = req.body.titleEn
  const titleRu = req.body.titleRu
  const titleUa = req.body.titleUa
  const author = req.userID

  const category = await new db.Categories({
    _id: new Types.ObjectId(),
    titleEn, titleRu, titleUa, author
  })
  
  await category.save().catch(err => res.status(500).send({msg: "Неудалось сохранить категорию", err}))
  const curCategory = await db.Categories.findOne({_id: category._id}).populate(['subCategories', 'author'])
  res.send({msg: "Категория добавлена успешно", category: curCategory})
}