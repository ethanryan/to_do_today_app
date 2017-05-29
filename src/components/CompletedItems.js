import React from 'react'

const CompletedItems = (props) => {
  let doneTask = props.completedTasks.map(comptask => { return <li>{comptask}</li>})
  return(
    <div>
      <p>Completed Items:</p>
      <ul>
        {doneTask}
      </ul>
    </div>
  )
}

export default CompletedItems
