import React, { useState } from 'react'
import './finish.css'

const Finish = () => {
  const[st,iSt]=useState();
  const draggingOver=(e)=>{
    e.preventDefault();
    console.log("Draging over")

  }
  const dragDroped=(e,props)=>{
  console.log("Droped",props)
  let id=e.dataTransfer.getData("todos")
  
  
  }
  
  return (
    <div dropable onDragOver={(e)=>draggingOver(e)} onDrop={(e)=>dragDroped(e)} className='FN-1' >
      Finish
     {st}
      </div>
  )
}

export default Finish