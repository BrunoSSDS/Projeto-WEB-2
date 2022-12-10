const express = require('express')
const session = require('express-session')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const apiRouter = require('./routes/api')
const staticRouter = require('./routes/static')

const db = require('./database/index')
db.sync({ force: true }).then(() => {
    console.log('Synced DB')
})

const app = express()

app.use(cors())

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const oneDay = 1000 * 60 * 60 * 24
app.use(session({
    secret: 'secret',
    cookie: { maxAge: oneDay },
    resave: false,
    saveUninitialized: false
}))
app.use(cookieParser('secret'))

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/', (req, res) => res.redirect('/inicio'))

app.use('/inicio', staticRouter)

app.use('/api', apiRouter)

app.use('/aluno', apiRouter)

app.use('/professor', apiRouter)


module.exports = app




