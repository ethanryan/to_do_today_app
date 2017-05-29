import React, {Component} from 'react'

import InputForm from './InputForm'
import List from './List'
import CompletedItems from './CompletedItems'
import Rewards from './Rewards'

class ListContainer extends Component {
  constructor() {
    super()
    this.state = {
      tasks: ["Wake up at 7am", "Go to Flatiron School", "Learn React", "Talk about gamification"],
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
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <InputForm
              onSubmit={this.handleAddTask.bind(this)}
            />
            <List
              tasks={this.state.tasks}
              onDelete={this.handleDeleteTask.bind(this)}
            />
          </div>
          <div className="col-md-4">
            <CompletedItems completedTasks={this.state.completedTasks}/>
          </div>
          <div className="col-md-4">
            <div>
              <Rewards
                tasks={this.state.tasks}
                completedTasks={this.state.completedTasks}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ListContainer
