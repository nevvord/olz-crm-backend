const router = express.Router()
const verify = require('../../middleware/verify')
const getAllUsers = require('./controller/get/getAllUsers')
const changeUserStatusSaccesses = require('./controller/put/changeUserStatusSuccesses')

router
  .use(verify)
  .get('/get/allusers', getAllUsers)
  .put('/change/user/:id',changeUserStatusSaccesses)

module.exports = router