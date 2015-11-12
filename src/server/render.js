import React from'react'
import  ReactDom from 'react-dom/server'
import main from '../app/main'

//console.log('1', React.isValidElement(React.createElement('h1', null, 'Hello')))
//console.log('1', React.isValidElement(main()))
var comp = React.createFactory(main)()
console.log('2', React.isValidElement(comp))
console.log('3', ReactDom.renderToString(comp))


export default function renderIndex(req, res) {
  res.send(ReactDom.renderToString(comp))
}
