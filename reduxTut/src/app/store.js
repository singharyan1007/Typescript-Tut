import { configureStore } from "@reduxjs/toolkit";
import TodoRducer from './features/todo/todoSlice';

 const store=configureStore({
    reducer:TodoRducer
})

export default store;