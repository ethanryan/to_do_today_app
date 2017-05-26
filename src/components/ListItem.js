import React from 'react'

// import react-bootstrap from 'react-bootstrap'

const ListItem = (props) => {
  console.log('ListItem props: ', props);
  const eachTask = props.taskItem.map(item => {
    return (<div style={ { textDecoration: props.isClicked ? 'line-through' : 'none' } }><input type="checkbox" onClick={props.onClick}></input> {item} </div>) })
  return (
    <div>
        { eachTask }
    </div>
  )
}

export default ListItem
