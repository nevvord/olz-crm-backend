const router = express.Router()
const middlewareVerify = require('../../middleware/verify')

const signin = require('./controllers/signin')
const verify = require('./controllers/verify')
const signup = require('./controllers/signup')

router
    .post('/auth/signin', signin)
    .post('/auth/signup', middlewareVerify, signup)
    .get('/auth/verify', middlewareVerify, verify)

module.exports = router