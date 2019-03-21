console.log('this is working somehow');

import React from 'react';
import Board from './component/Component1.jsx';



class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      board : {}
    }
  }
  render () {
    return (
   <div className="fourbyfour">
   <Board />
   </div>
    )
  }
}

export default App;
