import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { useSelector,useDispatch } from "react-redux";
import {updateTodos, addTodos } from "./counterslice";
import { current } from "@reduxjs/toolkit";

const mapStateToProps=(state)=>{
    return{
        todos:state,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addTodo:(obj)=>dispatch(addTodos(obj)),
        updaTodo:(obj)=>dispatch(updateTodos(obj))
    }
}
const Counter=(props)=>{

const[todo,setTodo]=useState("")
const inputRef=useRef(true);
const changeFocus=()=>{
    inputRef.current.disabled=false
    inputRef.current.focus();
}
const update=(id,value,e)=>{
if(e.which===13){
    props.updaTodo({id,item:value})
    inputRef.current.disabled=true
}

}
const handleChange=(e)=>{
    setTodo(e.target.value)
      
}
console.log(props) 

return(
<div>
    <input type="text"  onChange={(e)=>handleChange(e)}/>
    <button onClick={()=>props.addTodo({
        id:Math.floor(Math.random()*1000),
        item:todo,
        completed:false
    })}>Add</button>
    <br/>
    <ul>
        {props.todos.map((item)=>{
            return<li key={item.id}>
                
            <textarea ref={inputRef} disabled={inputRef} defaultValue={item.item} 
            onKeyDown={(e)=>update(item.id,inputRef.current.value,e)}/>
                
            <button onClick={()=>changeFocus()}>Edit</button></li>
        })

        }
    </ul>

</div>
)}
export default connect(mapStateToProps,mapDispatchToProps) (Counter);