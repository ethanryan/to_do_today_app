import React from 'react'
var FaTrophy = require('react-icons/lib/fa/trophy');
var FaStar = require('react-icons/lib/fa/star');



const Rewards = (props) => {
  console.log("counter", props)

  const Counter = props => { return props.completedTasks.length }



  return(
    <div className="row">
      <span className="gami-padding">
        <h6>Firsties!</h6>
        {(props.completedTasks.length > 0) ? <h1><FaStar /></h1> : null}
      </span>
      <span className="gami-padding">
        <h6>Score</h6>
        <h1 className="score-center">{(props.completedTasks.length > 0) ? props.completedTasks.length : null}</h1>
      </span>
      <span className="gami-padding">
        <h6>All Done</h6>
        {(props.tasks.length === 0 && props.completedTasks.length > 0) ? <h1><FaTrophy /></h1> : null}
      </span>
    </div>
  )
}

export default Rewards





// const Counter = (props) =>{
//   return props.completedTasks.length
// }


// const FirstBadge = () =>{
//
// }
//
// const AllDoneBadge = () =>{
//
// }
