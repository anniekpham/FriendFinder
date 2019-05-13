const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname, '/public')))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const apiroutes = require('./app/routing/apiroutes')
const htmlroutes = require('./app/routing/htmlRoutes')

apiroutes(app)
htmlroutes(app)

app.listen(process.env.PORT || 3000)