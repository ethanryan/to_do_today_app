import React, {Component} from 'react'

import InputForm from './InputForm'
import ListItem from './ListItem'

class ListContainer extends Component {
  constructor() {
    super()
    this.state = {
      task: []
    }
  }

  handleAddTask(taskItem) {
    this.setState( prevState => {
      return {
        task: [...prevState.task, taskItem]
      }
    })
  }

  render() {
    return(
      <div>
        <InputForm onSubmit={this.handleAddTask.bind(this)} />
        <ListItem taskItem={this.state.task} />
      </div>
    )
  }
}

export default ListContainer
