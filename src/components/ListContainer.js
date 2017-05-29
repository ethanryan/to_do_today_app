import React, {Component} from 'react'

import InputForm from './InputForm'
import List from './List'
import CompletedItems from './CompletedItems'

class ListContainer extends Component {
  constructor() {
    super()
    this.state = {
      tasks: [],
      completedTasks: [] //adding this to keep track of all completedTasks
  }
  }

  handleAddTask(taskItem) {
    this.setState( prevState => {
      return {
        tasks: [...prevState.tasks, taskItem]
      }
    })
  }

  handleDeleteTask(task, index, tasks) {
    console.log('list container', index);
    this.setState( prevState => ({
      tasks: prevState.tasks.filter( task => task !== tasks[index]),
      completedTasks: [...prevState.completedTasks, task]
    }))
  }


  render() {
    return(
      <div>
        <InputForm
          onSubmit={this.handleAddTask.bind(this)}
        />
        <List
          tasks={this.state.tasks}
          onDelete={this.handleDeleteTask.bind(this)}
        />
        <CompletedItems completedTasks={this.state.completedTasks}/>
      </div>
    )
  }
}

export default ListContainer
