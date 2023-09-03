import React from 'react'
import './canvas.css'
import ArrayBar from '../../components/ArrayBar/ArrayBar'
function canvas(props) {
  const arr =[]
  arr.inc
  
  return (
    <div className='canvas'>
      
      {props.barValue.map((value,index)=>{
        return <ArrayBar barValue={value} heightInPercentage={props.barHeightPercentages[index]} key={index} isSwapping={props.barSwap.includes(index)}/>
      })}
    </div>
  )
}

export default canvas