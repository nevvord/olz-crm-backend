module.exports = async (req, res) => {
  const {titleRu, titleEn, titleUa} = req.body
  const _id = req.params.id

  const category = await db.Categories.findOne({_id}).populate(['subCategories', 'author'])
  
  category.titleEn = titleEn
  category.titleRu = titleRu
  category.titleUa = titleUa
  category.confirmed = false

  category.save().then(response => {
    res.send({msg: "Категрия успешно измененна", category})
  }).catch(error => {
    res.status(500).send({msg: "Неудалось изменить категорию", error})
  })
}