module.exports = (app, friendslist) => {
    app.get('/api/friends', (req, res) => {
        res.send(friendslist)
    })
}