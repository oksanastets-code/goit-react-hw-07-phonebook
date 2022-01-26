import React, { Component } from 'react';
import Counter from './Counter';

class App extends Component {
  

  render() {
    

    return (
      <>
        <Counter initialValue={10} />
      </>
    );
  }
}

export default App;