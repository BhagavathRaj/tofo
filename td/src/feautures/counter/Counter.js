import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { useSelector,useDispatch } from "react-redux";
import { updateTodos, addTodos } from "./counterslice";
import { current } from "@reduxjs/toolkit";
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import './conter.css'

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
const dragStarted=(e,props,item)=>{
    e.dataTransfer.setData('todos',props)
    console.log(e.dataTransfer.setData('todos',item))
 console.log(props)
}
const handleChange=(e)=>{
    setTodo(e.target.value)
      
}
console.log(props) 

useEffect(()=>{
    const tr=window.localStorage.getItem('todos')
   
},[])



useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(props))
},[props])


return(
<div className="Md-1"> 
    <InputGroup size="sm" className="mb-3">
    <input type="text"  onChange={(e)=>handleChange(e)}/>
    <Button variant="outline-secondary" id="button-addon1" onClick={()=>props.addTodo({
        id:Math.floor(Math.random()*1000),
        item:todo,
        completed:false
    })}>Add</Button>
    </InputGroup>
    <br/>
    
        {props.todos.map((item)=>{
            return<Form draggable onDragStart={(e)=>dragStarted(e,props.todos)} className="mb-3">
                <Row className="mb-3" >
                <Form.Group >
                  <FloatingLabel
        controlId="floatingTextarea"
        
        className="mb-3"
        key={item.id}
      />  
                 <Form.Control  style={{ height: '50px' ,width:'200px'}} as="textarea" placeholder="Leave a comment here" 
           ref={inputRef} disabled={inputRef} defaultValue={item.item} 
            onKeyDown={(e)=>update(item.id,inputRef.current.value,e)}/>
            
          
              
            </Form.Group>
            <Form.Group>
            <Button    className="mb-3 btn-sm float-start" variant="dark"id="button-addon1" onClick={()=>changeFocus()}>Edit</Button>
            </Form.Group>
            </Row>

            </Form>
        })

        }
    

</div>
)}
export default connect(mapStateToProps,mapDispatchToProps) (Counter);