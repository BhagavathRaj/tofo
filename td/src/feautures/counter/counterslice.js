import { createSlice } from "@reduxjs/toolkit";

const initialState=[];


export const counterslice=createSlice({
    name:"todos",
    initialState,
    reducers:{
        
       
        addTodos:(state,action)=>{
            state.push(action.payload);
            return state;
        },
        updateTodos: (state, action) => {
            return state.map((todo)=>{
                if(todo.id===action.payload.id){
                    return{
                        ...todo,
                        item:action.payload.item,
                    }
                }
                return todo
            })
        },
        add:(state,action)=>{
            state.push(action.payload)
            return state;
        }
        

    }
    
})

export const {updateTodos,addTodos}=counterslice.actions

export  default  counterslice.reducer