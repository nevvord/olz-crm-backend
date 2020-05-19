const   express         =   require('express')
const   db              =   require('./db/index')()
const   cors            =   require('cors')
// const   multer          =   require('./plugins/multer')
//==== Middleware =====
 const   verifyToken     =   require('./middleware/verify')
//===== Glogal CFG =====
global.db       = db
global.express  = express
// global.multer   = multer

//===== Config sets =====
const { serverConfig } = require('./config/')

//===== Set up express APP =====
const app = express()

//===== APP USE =====
app.use(express.static('uploads'))
app.use(express.json())
app.use(cors({
    credentials: true,
    origin: true,
    optionsSuccessStatus: 200
}))

const Users =  require('./routes/Users')
const zvonilo = require('./routes/zvonilo')
const Admin = require('./routes/Administartion')
const OLZ = require('./routes/OLZ')

app.use('/zvonilo', zvonilo.router)
app.use('/user', Users.router)
app.use('/administration', Admin.router)
app.use('/olz', OLZ.router)

//==== Listen Requests =====
app.listen(serverConfig.port, () => console.log(`Server has been running in ${serverConfig.host}:${serverConfig.port}`))