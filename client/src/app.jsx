import React from 'react';
import Board from './component/Component1.jsx';
import Functionality from './component/Component2.jsx';



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
   <Functionality />
   </div>
    )
  }
}

export default App;
