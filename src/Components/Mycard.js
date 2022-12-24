import React from 'react'
import './Mycard.css'
const Mycard = (props) => {
  return (
    <div className='mycard'>MyCard No. {props.cardno}</div>
  )
}

export default Mycard