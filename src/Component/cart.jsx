import { useSelector } from "react-redux"
import { useEffect } from "react"
function Cart() {
    const cart=useSelector((state)=>state.cart.cart)



    useEffect(()=>{
      localStorage.setItem("cartProduct",JSON.stringify(cart))
    },[])
    const data=localStorage.getItem("cartProduct")
const Products=JSON.parse(data)
console.log(Products)
   
  return (
    <div>
       {
       cart.map((item)=>{
         return(
            <div>
                <img src={item.thumbnail} alt="image" />
            </div>
         )
       })
       
       
       
       }

    </div>
  )
}

export default Cart