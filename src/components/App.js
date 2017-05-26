import React, { Component } from 'react'

import ListContainer from './ListContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>ToDoToday App</h2>
          <ListContainer />
        </div>
      </div>
    )
  }
}

export default App
