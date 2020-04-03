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

const auth =  require('./routes/auth')
const zvonilo = require('./routes/zvonilo')

app.use('/zvonilo', zvonilo.router)
app.use('/auth', auth.router)

//==== Listen Requests =====
app.listen(serverConfig.port, () => console.log(`Server has been running in ${serverConfig.host}:${serverConfig.port}`))