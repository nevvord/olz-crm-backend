module.exports = (req, res) => {
    const currentUser = {
        login: 'Calipso',
        password: '362514'
    }
    const { login, password } = req.body

    if (login === currentUser.login && password === currentUser.password) {
        return res.send({msg: "Loged in!"})
    }else{
        return res.status(401).send({msg: "Password or login incorrect!"})
    }
}