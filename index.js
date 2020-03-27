const   express         =   require('express')
const   db              =   require('./db/index')()
const   cors            =   require('cors')
// const   multer          =   require('./plugins/multer')
//==== Middleware =====
// const   verifyToken     =   require('./middleware/veryify')
//===== Glogal CFG =====
global.db       = db
global.express  = express
// global.multer   = multer

//===== Config sets =====
const {serverConfig} = require('./config/')

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
// app.use(cookieparser())

//===== Routes =====
// const auth = require('./router/auth')
// const api = require('./router/api')
// const store = require('./router/store')
// const crm = require('./router/crm')

// app.get('/', (req, res) => {
//     res.send({
//         api: "worked"
//     })
// })
// app.use('/auth', auth.router)

const auth =  require('./routes/auth/')

app.post('/zvonilo/addcall', (req, res)=> {
    const contentJson = JSON.stringify(req.body)
    
    db.Callers.create({contentJson} , error => {
        if(error){
            res.status(500).req({msg: "Ошибка сервера. Неудалось сохранить запроз."})
        }else{
            res.send({msg: "Запрос успешно сохранен!"})
        }
    })
})
app.get('/zvonilo/getcalls', (req, res)=> {
    db.Callers.find({}, (error, resultat) => {
        if (error) return res.status(500).send({msg: "Ошибка 500. Не смог найти новые звонки и сделал это с ошибкой."})
        return res.send({calls: resultat})
    })
})
app.use('/auth', auth.router)
// app.use('/store', verifyToken , store.router)
// app.use('/crm' , crm.router)

//==== Listen Requests =====
app.listen(serverConfig.port, () => console.log(`Server has been running in ${serverConfig.host}:${serverConfig.port}`))