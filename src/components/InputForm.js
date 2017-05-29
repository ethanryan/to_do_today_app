import React, { Component } from 'react'

class InputForm extends Component {

  constructor(props) {
    //console.log('props from InputForm', props);
    super(props) //inheritance
    this.state=({
      input: '',
      isClicked: false, //add these as default values for new objects created by form
    //   className: null, //add these as default values for new objects created by form
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
    console.log('form submitted: ', this.state.input);
    event.preventDefault()
    // this.props.onSubmit( this.state.input )
    this.props.onSubmit( this.state.input ) //submits whole object on submit???
    this.setState({
      input: '',
      //isClicked: false, //add these as default values for new objects created by form
      //className: null, //add these as default values for new objects created by form
    })
  }

  /* isClicked={this.state.isClicked} */
  render() {
    return(
      <div>
        <h1>Enter a To Do Item</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            value={this.state.input}
            isClicked={this.state.isClicked}
            className={this.state.className}
            onChange={this.handleInputChange.bind(this)}
          />
          <input type="submit" value="Add A Task"/>
        </form>
      </div>
    )
  } //end of render

} //end of InputForm class

export default InputForm
