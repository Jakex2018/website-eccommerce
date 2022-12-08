import { createSlice } from '@reduxjs/toolkit'



const initialState = {
   cartItems:[],
   totalAmount:0,
   totalQuantity:0
}

const cartSlice = createSlice({
  
  name: 'cart',
  initialState,
  reducers: {
    addItem:(state , action) => {
      const newItem = action.payload;
      const existingItems = state.cartItems.find((item) =>item.id === newItem.id); 
      state.totalQuantity++

      if(!existingItems){
        state.cartItems.push({
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          quantity:1,
          totalPrice: newItem.price,
        })
      }else{
        existingItems.quantity++
        existingItems.totalPrice = Number(existingItems.totalPrice) + Number(existingItems.price) 
      }

      state.totalAmount = state.cartItems.reduce((total , item) => total + Number(item.price) * Number(item.quantity),0);
    },
    
    deleteItem:(state,action) =>{
     const infos= state.cartItems.find(item => item.id === action.payload)
     if(infos){
      state.cartItems.splice(state.cartItems.indexOf(infos), 1)
     }
    }
  },
})

export const cartAction = cartSlice.actions;

export default cartSlice.reducer