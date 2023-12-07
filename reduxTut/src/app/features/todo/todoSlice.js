import { createSlice,nanoid } from "@reduxjs/toolkit";
//nanoid is used to basically generate unique ids

const initialState={
    todos:[{id:1,text:"Hello World"}]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload,
                completed:false
                //payload is an object
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!=action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
            );
        },
        toggleComplete:(state,action)=>{
            const todoToToggle=state.todos.find((todo)=>todo.id===action.payload);
            if(toggleComplete){
                todoToToggle.completed=!todoToToggle.completed
            }
        }
    }
})


export const {addTodo,updateTodo,removeTodo,toggleComplete}=todoSlice.actions

export default todoSlice.reducer