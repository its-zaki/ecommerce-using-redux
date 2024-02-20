import { createSlice, nanoid } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: 'carts',
    initialState:{
        cartsItems:[]
    },
    reducers:{
        addcart: (state, action)=>{
            state.cartsItems.push({
                title: action.payload.title,
                description: action.payload.description,
                image: action.payload.image,
                price: action.payload.price,
                id: action.payload.id

            })
            
        },
        removecart: (state ,action)=>{
            state.cartsItems.splice(action.payload.index , 1)
        }
    }
})
export const {addcart, removecart} = cartSlice.actions
export default cartSlice.reducer