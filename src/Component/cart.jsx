import { useSelector } from "react-redux"

function Cart() {
    const cart=useSelector((state)=>state.cart.cart)
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