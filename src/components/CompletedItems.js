import React from 'react'

const CompletedItems = (props) => {
  let doneTask = props.completedTasks.map(comptask => { return <li>{comptask}</li>})
  return(
    <div>
      <h3>Completed Items:</h3>
      <ul>
        {doneTask}
      </ul>
    </div>
  )
}

export default CompletedItems
