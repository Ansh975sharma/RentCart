import {createSlice} from "@reduxjs/toolkit"

export const slice=createSlice({
    name:"cart",
    initialState:{
        cart:[]
    },
    reducers:{
 addProduct :(state,action)=>{
    
   state.cart= [...state.cart,action.payload]
    
 },
deleteProduct:(state,id)=>{
    state.cart=state.cart.filter((item)=>{
        return(
            item.id!=id
        )
    })
}

    }

    
})
export const{addProduct,deleteProduct}=slice.actions
export default slice.reducer