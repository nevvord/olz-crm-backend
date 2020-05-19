module.exports = async (req, res) => {
  const categories = await db.Categories.find({}).populate(['subCategories', 'author']).catch(error => {
    res.status(404).send({msg: "Категории не найдены", error})
  })
  res.send({msg: "Категрии успешно найденны", categories})
}