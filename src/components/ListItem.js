import React from 'react'

const ListItem = (props) => {
  const els = props.taskItem.map(item => { return (<li>{item}</li>) })
  return (
    <div>
      <ul>
        { els }
      </ul>
    </div>
  )
}

export default ListItem
