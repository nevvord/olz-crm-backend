module.exports = async (req, res) => {
  const users = await db.Users.find({}).populate('creator')
  res.send(users)
}