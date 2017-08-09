import React, { Component } from 'react'

class InputForm extends Component {

  constructor(props){
    console.log('props from form: ', props);
    super() //inheritance
    this.state=({
      input: '',
      // isClicked: false, //add these as default values for new objects created by form
    })
  }

  handleInputChange(event) {
    //console.log('this', this);
    //console.log('e', e);
    this.setState({
      input: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.onSubmit( this.state.input )
    this.setState({input: ''})
  }

  render() {
    return(
      <div>
        <h3>Enter a To Do Item:</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text"
            value={this.state.input}
            onChange={this.handleInputChange.bind(this)}
          />
          <input type="submit" value="Add A Task"/>
        </form>
      </div>
    )
  } //end render

} //end class

export default InputForm
