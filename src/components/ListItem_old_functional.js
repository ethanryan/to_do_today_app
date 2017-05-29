import React from 'react'

// import react-bootstrap from 'react-bootstrap'


const ListItem = (props) => {
  console.log('ListItem props: ', props);

  // onClick() { //this needs to be here, in the container
  //   console.log('ListItem: i also got clicked', event);
  //   // this.setState({
  //   //   isClicked: true
  //   // })
  // }


  // handleStrikeThroughClick(event) {
  //
  //   console.log('event.target.value is: ', event.target.value)
  //   event.target.className = 'done'
  //
  //   // console.log('i was clicked!')
  //   // console.log('this.state.task was clicked:', this.state.task);
  // }

  // let allRows = props.filteredResults.map(transaction => {
  // return <OneRow
  //   transaction={transaction}


  //put this back into li later:::::::: className={props.isClicked ? 'done' : null}

  // <li key={todo.id}>
  //   {todo.text}
  // </li>

  const eachTask = props.tasks.map(item => {
    // return (<div style={ { textDecoration: props.isClicked ? 'line-through' : 'none' } }><input type="checkbox" onClick={props.onClick}></input> {item} </div>) })
    return (
        <li key={item.id}
          onClick={props.onClick}
          > {item} </li>
      )
    })
  return (
    <div>
        { eachTask }
    </div>
  )
} //end of ListItem function

export default ListItem


// var users = this.props.users.map((user, index) => {
//   return <li
//     key={index}
//     onClick={ () => this.props.onClick(index) }
//     style={ { textDecoration: user.isClicked ? 'line-through' : 'none' } }
//   >
//     { user.firstName }
//   </li>
// });
