import { configureStore, createSlice } from '@reduxjs/toolkit';
import data from './assets/data';


export const menuSlcie = createSlice({
    name: "menu",
    initialState: data.menu,
    reducers:{}
})

export const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers:{
        addToCart(state, action) {return[...state, action.payload]},
        removeFromCart(state, action) {return state.filter(el=>
            action.payload.id !== el.id
        )}
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions

export const store = configureStore({
    reducer: {
        menu: menuSlcie.reducer,
        cart: cartSlice.reducer
    }
})