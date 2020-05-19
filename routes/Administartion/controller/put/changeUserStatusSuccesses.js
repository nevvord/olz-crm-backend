module.exports = async (req, res) => {
  const _id = req.params.id
  const mode = req.body.mode
  const accesses = req.body.accesses
  const userAdmin = await db.Users.findOne({_id: req.userID})
  if(userAdmin.mode > 1) return res.status(401).send({msg: 'У вас нет прав доступа'})
  let user = await db.Users.findOne({_id})
  if (!user) return res.status(500).send({msg: "Ошибка сервера. Неудалось найти юзера."})
  user.mode = mode
  user.accesses = accesses
  user.save().then((result) => {
    res.send({user})
  }).catch((err) => {
    res.status(500).send({msg: "Неудалось сорханить пользователя", err})
  })
}