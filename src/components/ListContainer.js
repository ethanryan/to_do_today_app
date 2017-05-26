import React, {Component} from 'react'

import InputForm from './InputForm'
import ListItem from './ListItem'

class ListContainer extends Component {
  constructor() {
    super()
    this.state = {
      task: [],
      isClicked: false
    }
    // this.handleInputChange = this.handleInputChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  //input form function:
  handleAddTask(taskItem) {
    this.setState( prevState => {
      return {
        task: [...prevState.task, taskItem]
      }
    })
  }

  //list item functions:
  // handleOnClick() {
  //   this.setState({
  //     done: true
  //   })
  // }
  //
  // handleStrikeThroughClick(index) {
  //   this.setState({
  //     task: this.state.task.map((oneTask, i) => {
  //       if (i === index) {
  //         oneTask.isClicked = !oneTask.isClicked
  //       }
  //       return oneTask
  //     })
  //   })
  // }

  handleStrikeThroughClick() {
    console.log('i was clicked!')
    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  render() {
    return(
      <div>
        <InputForm
          onSubmit={this.handleAddTask.bind(this)}
        />
        <ListItem
          status={this.state.isClicked}
          taskItem={this.state.task}
          onClick={this.handleStrikeThroughClick.bind(this)}
        />
      </div>
    )
  }
}

export default ListContainer
