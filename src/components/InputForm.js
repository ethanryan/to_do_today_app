import React, { Component } from 'react'

class InputForm extends Component {
  constructor(props){
    super() //inheritance
    this.state=({
      input: ''
    })
  }


    handleInputChange(e) {
      console.log('this', this);
      console.log('e', e);
      this.setState({
        input: e.target.value
      })
    }

    handleSubmit(e) {
      e.preventDefault()
      this.props.onSubmit( this.state.input )
      this.setState({input: ''})
      //window.history.pushState('/students') //adding this
    }

  render(){
    return(
      <div>
        <h1>Enter a To Do Item</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            value={this.state.task}
            onChange={this.handleInputChange.bind(this)}
          />
          <input type="submit" value="Add A Task"/>
        </form>
      </div>
    )
  }
}

export default InputForm
//
// handleInputChange(e) {
//     this.setState({
//       student: e.target.value
//     })
//   }
//
//   handleSubmit(e) {
//     e.preventDefault()
//     this.props.onSubmit( this.state.student )
//     this.setState({student: ''})
//     //window.history.pushState('/students') //adding this
//   }
//
//   render() {
//     return (
//       <div className='col-md-8' >
//         <form onSubmit={this.handleSubmit.bind(this)}>
//           <label>Student Name</label>
//           <input type='text' value={this.state.student} onChange={this.handleInputChange}/>
//           <input type='submit' value='Add a Student' />
//         </form>
//       </div>
//     )
//   }
// }
