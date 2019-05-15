const friendslist = require('../app/data/friendapi')
module.exports = (app) => {
    app.get('/api/friends', (req, res) => {
        res.send(friendslist)
    })
    app.post('/api/friends', (req, res) => {
        yourinfo = req.body
        friendslist.push(yourinfo)
        res.send('Added new friend!')
        console.log(friendslist)
    })
}