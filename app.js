const express = require('express')
const path = require('path')
const app = express()


app.use(express.static(path.resolve(__dirname,'static')))

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'static', 'main.html'))
})
app.use(function (req, res, next) {
    res.status(404).send("Not Found")
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!!!')
});


