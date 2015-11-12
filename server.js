var express = require('express')

var app = express()

app.get('', renderIndex)


require('./webpackServer')(app);

app.listen(8000)

function renderIndex(req, res) {
  res.send('Hello')
}


