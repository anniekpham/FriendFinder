const express = require('express')
const { join } = require('path')
const app = express()

const friendslist = [
    {
       name: 'Lady Gaga',
       photo: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpeopledotcom.files.wordpress.com%2F2018%2F10%2Flady-gaga2.jpg%3Fcrop%3D0px%252C0px%252C1000px%252C1000px%26resize%3D1000%252C1000&w=380&h=380&c=sc&poi=face&q=85',
       scores: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5] 
    },
    {
        name: 'Ryan Reynolds',
        Photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg/220px-Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg',
        scores: [1, 2, 4, 5, 1, 3, 4, 1, 2, 5]
    }, 
    {
        name: 'Chris Evans',
        Photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/5_Dec._2016_CJCS_USO_Holiday_Tour_-_Incirlik_Air_Base_161205-D-PB383-044_%2831430825446%29_%28cropped%29_%28cropped%29.jpg/220px-5_Dec._2016_CJCS_USO_Holiday_Tour_-_Incirlik_Air_Base_161205-D-PB383-044_%2831430825446%29_%28cropped%29_%28cropped%29.jpg',
        scores: [3, 5, 4, 1, 2, 2, 1, 5, 3, 2]
    }     
]

app.use(express.static(join(__dirname, '/app/public')))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// can't get the friends data when writing data in the friends.js
// const friends = require('./app/data/index')
const apiroutes = require('./app/routing/apiroutes')

apiroutes(app, friendslist)

app.listen('3000')