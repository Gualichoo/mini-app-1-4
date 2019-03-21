console.log('this is working somehow');

import React from 'react';
// import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      board : {}
    }
  }
  render () {

   return (
     <div>Hello World</div>
   )

  }
}

export default App;
