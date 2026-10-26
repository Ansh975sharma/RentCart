import {configureStore} from "@reduxjs/toolkit"
import sliceReducer from "../Features/Slice.js"
export const store=configureStore({
  reducer:{
    cart:sliceReducer
}

})