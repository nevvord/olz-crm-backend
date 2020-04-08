const router = express.Router()
const verify = require('../../middleware/verify')

const zvonobot = require('./controllers/post/zvonobot')
const addNewCall = require('./controllers/post/addNewCall')
const search = require('./controllers/post/searchCall')
const getCold = require('./controllers/get/Cold')
const getHot = require('./controllers/get/Hot')
const getCalls = require('./controllers/get/Calls')
const putCall = require('./controllers/put/changeCall')
const replacebasket = require('./controllers/put/replaceBasket')
const deleteCallBasket = require('./controllers/delete/deleteCallBusket')
const reminder = require('./controllers/post/reminder')
const changeStatus = require('./controllers/put/changeStatus')
const changeType = require('./controllers/put/changeType')

router  .post('/addcalls', zvonobot)
        .use(verify)
        .post('/addnewcall', addNewCall)
        .post('/searh', search)
        .post('/remind/:id', reminder)
        .get('/getcalls', getCalls)
        .get('/getcold', getCold)
        .get('/gethot', getHot)
        .put('/changecall/:id', putCall)
        .put('/replacebasket/:id', replacebasket)
        .put('/changestatus/:id', changeStatus)
        .put('/changetype/:id', changeType)
        .delete('/dlete/callbasket/:id', deleteCallBasket)

module.exports = router