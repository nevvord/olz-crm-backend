const router = express.Router()
const verify = require('../../middleware/verify')
const controlles = require('./controllers')

router
  .use(verify)
  .post('/categories/add/category', controlles.addCategory)
  .post('/categories/add/subcategory', controlles.addSubCategory)
  .get('/categories/get', controlles.getCategories)
  .put('/categories/change/category/:id', controlles.changeCategory)
  .put('/categories/change/subcategory/:id', controlles.changeSubcategory)
  .put('/categories/confirm/subcategory/:id', controlles.confirmSubCategory)
  .put('/categories/confirm/category/:id', controlles.confirmCategory)

module.exports = router