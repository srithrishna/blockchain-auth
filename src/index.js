
require('dotenv').config()

const express = require('express')
const router = require('./routes')
const Session = require('express-session')


const app = express()
app.use(express.json())


app.use(
  Session({
    name: 'siwe-quickstart',
    secret: 'siwe-quickstart-secret',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false, sameSite: true },
  })
)
app.use(express.static(__dirname + '/public'))
app.use(router)

// Start app
app.listen(process.env.PORT)