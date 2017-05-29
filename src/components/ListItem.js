// import react-bootstrap from 'react-bootstrap'

import React, { Component } from 'react'

class ListItem extends Component {

  constructor(props) {
  console.log('ListItem props: ', props)
  super(props)
    this.state=({
      input: '',
      isClicked: false,
      className: null,
      hover: false,
      color: null,
    })
  } //end of constructor


//   toggleChoice(name, event) {
//    let selected = this.state.selectedCircle;
//    //selected = {};
//    selected[name] = this.state.selectedCircle[name] == "selected" ? "" : "selected";
//    this.setState({selectedCircle: selected});
// }


  handleClick(event) {
    event.preventDefault();
    //let selected = event.target
    //selected[name] = this.state[name] === "selected" ? "" : "selected";

    //console.log('ListItem event:', event);
    console.log('ListItem event.target:', event.target);
    console.log('ListItem props:', this.props);
    console.log('ListItem this.state.input: ', this.state.input);
    //console.log('e', e);
    this.setState({
      // input: event.target.value
      isClicked: true,
    })
    console.log('listItem isClicked: ', this.state.isClicked);
  }


  // changeColor(index) {
  //     this.props.tasks.map(function(item, index) {
  //         return item.color = (index && item.color === '') ? 'blue' : '';
  //     });
  //     this.setState(this.state);
  // }


  render() {

  var that = this;
  const eachTask = this.props.tasks.map((item, index, tasks) => {

    return (
        <li
          name={item}
          key={index}
          index={index}
          onClick={() => {console.log('clicking this index: ', index); that.props.onDelete(item, index, tasks)} }

          > {item} </li>
      )
    })
  return (
    <div>
        { eachTask }
    </div>
  )

  } //end of render

} //end of ListItem class

export default ListItem
