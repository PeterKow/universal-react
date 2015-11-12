import React, { Compnent } from 'react'

const Main = React.createClass({
  render: () => {
    return React.createElement('h1', null, 'Hello');
    //return ( <div>
    //  <H1>Hello!</H1>
    //</div>)
  }
})

function Main2() {
  return ( <div>
            <h1>Hello!!!</h1>
           </div>)
}
export default Main2