import { useContext,createContext } from "react";

export const TodoContext=createContext({
  //basically holds the states or methods to act upon the state
  todos:[
    {
      id:1,
      todo:"Todo Message",
      completed:false
    }
  ],
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    updateTodo:(id,todo)=>{},
    toggleComplete:(id)=>{}
  
});

export const TodoProvider=TodoContext.Provider;

export  const useTodo=()=>{
  return useContext(TodoContext);
}



