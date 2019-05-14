// const yourinfo = require('../data/index')
module.exports = (app, friendslist) => {
    app.get('/api/friends', (req, res) => {
        res.json(friendslist)
    })
    app.post('/api/friends', (req, res) => {
        console.log(req.body)
        yourinfo = {
            name: document.querySelector('#name').value,
            photo: document.querySelector('#photo').value,
            scores: [
                parseInt(document.querySelector('#question1').value),
                parseInt(document.querySelector('#question2').value),
                parseInt(document.querySelector('#question3').value),
                parseInt(document.querySelector('#question4').value),
                parseInt(document.querySelector('#question5').value),
                parseInt(document.querySelector('#question6').value),
                parseInt(document.querySelector('#question7').value),
                parseInt(document.querySelector('#question8').value),
                parseInt(document.querySelector('#question9').value),
                parseInt(document.querySelector('#question10').value)
            ]
        }
        yourinfo = req.body
        friendslist.push(yourinfo)
        res.send('Added new friend!')
    })
}