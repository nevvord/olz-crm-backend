const router = express.Router()
const middlewareVerify = require('../../middleware/verify')

const signin = require('./controllers/signin')
const verify = require('./controllers/verify')

router
    .post('/signin', signin)
    .get('/verify', middlewareVerify, verify)

module.exports = router