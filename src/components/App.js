import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import ListContainer from './ListContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <nav className="navbar navbar-light bg-faded">
            <a class="navbar-brand">ToDoToday</a>
          </nav>
          <ListContainer />
        </div>
      </div>
    )
  }
}

export default App
