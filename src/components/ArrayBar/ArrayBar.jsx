import React from 'react'
import "./array-bar.css"
function ArrayBar(props) {
  return (
    <div className={props.isSwapping ? "array-bar swap-bar":"array-bar"} style={{height:props.heightInPercentage+"%"}}> </div>
    
  )
}

export default ArrayBar