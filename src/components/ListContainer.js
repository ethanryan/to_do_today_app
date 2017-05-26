import React, {Component} from 'react'

import InputForm from './InputForm'
import ListItem from './ListItem'

class ListContainer extends Component {
  constructor() {
    super()
    this.state = {
      task: []
    }
    // this.handleInputChange = this.handleInputChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
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
        <InputForm onSubmit={this.handleAddTask.bind(this)}/>
        <ListItem taskItem={this.state.task} />
      </div>
    )
  }
}

//
// handleSubmit(e) {
//   e.preventDefault()
//   this.props.onSubmit( this.state.student )
//   this.setState({student: ''})
//   //window.history.pushState('/students') //adding this
// }
//
// render() {
//   return (
    // <div className='col-md-8' >
    //   <form onSubmit={this.handleSubmit.bind(this)}>
    //     <label>Student Name</label>
    //     <input type='text' value={this.state.student} onChange={this.handleInputChange}/>
    //     <input type='submit' value='Add a Student' />
    //   </form>
    // </div>
//   )
// }

export default ListContainer
