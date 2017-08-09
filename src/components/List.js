// import react-bootstrap from 'react-bootstrap'

import React from 'react'

import ListItem from './ListItem'

const List = (props) => {
  return (
    <ListItem
      tasks={props.tasks}
      onDelete={props.onDelete}
    />
  )
} //end of function

export default List
