const express = require('express')
const { join } = require('path')
const app = express()

app.use(express.static(join(__dirname, '/app/public')))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// const apiroutes = require('./app/routing/apiroutes')

// apiroutes(app)

app.listen('3000')