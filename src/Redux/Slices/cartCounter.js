import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect, useState } from "react";

// const [ data, setdata ] = useState([]);

// const updatedCart = async () => {
//     await axios.get( "http://localhost:8000/api/cart/getCart" )
//     .then( (value) => {
//         setdata( value.data );
//     } )
// }

// useEffect ( () => {
//     updatedCart();
// }, [] )

const cartSlice = createSlice({
    name:'addToCart',
    initialState:{
        cart : []
    },
    reducers:{
            addToCart : (state, action)=>{

                const itemIndex = state.cart.find((item)=>
                item.id === action.payload.id
                );
                if(itemIndex)
                    itemIndex.quantity += 1
                else
                {
                    state.cart.push({...action.payload, quantity : 1})
                }
            },
            incrementCart : (state, action)=>
            {
                const item = state.cart.find((items)=>
                items.id === action.payload.id)

                if(item)
                    item.quantity += 1;
        
            },
            decrementCart : (state, action)=>{
                const item = state.cart.find((items)=>
                items.id === action.payload.id
                )
                if(item && item.quantity > 1)
                        item.quantity -= 1
            },

            removeCart : (state, action)=>
            {
                const item = state.cart.findIndex((items)=>
                items.id === action.payload.id
                )
                if(item!==-1)
                    state.cart.splice(item,1)
            }, 

            clearCart : (state, action)=>
            {
                state.cart = []
            },


    }
})

export const { addToCart, incrementCart, decrementCart, removeCart, clearCart } = cartSlice.actions
export default cartSlice.reducer;