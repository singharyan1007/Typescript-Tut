import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cart/cartSlice'
import productReducer from './features/products/productSlice.js'
const store=configureStore({
    reducer:{
        cart:cartReducer,
    product:productReducer,
    }

})

export default store;
