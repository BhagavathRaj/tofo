import React, { useState } from 'react'
import './finish.css'

const Finish = () => {
  const[st,setSt]=useState('');
  const draggingOver=(e)=>{
    e.preventDefault();
    console.log("Draging over")

  }
  const dragDropped=(e)=>{
  console.log("Droped")
 
  const droppedData = JSON.parse(e.dataTransfer.getData('todos'));
  console.log("Dropped data:", droppedData);
  
  
  
  }
  
  return (
    <div dropable onDragOver={(e)=>draggingOver(e)} onDrop={(e)=>dragDropped(e)} className='FN-1' >
      Finish
     
      </div>
  )
}

export default Finish