import React from 'react'

const ListItem = (props) => {
  console.log('ListItem props: ', props);
  const eachTask = props.taskItem.map(item => { return (<li>{item}</li>) })
  return (
    <div>
      <ul>
        { eachTask }
      </ul>
    </div>
  )
}

export default ListItem
