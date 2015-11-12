var express = require('express')
import renderIndex from './render'

var app = express()
app.get('', renderIndex)

require('../../webpackServer')(app);

app.listen(8000)

