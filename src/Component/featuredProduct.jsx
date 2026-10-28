import { useQuery } from "@tanstack/react-query"
import { fetchApi } from "../API/Api"
import { FaStar } from "react-icons/fa"
import { useSelector,useDispatch } from "react-redux"
import { addProduct } from "../Features/Slice"


function FeaturedProduct() {
  const cart=useSelector((state)=>state.cart.cart)
  const dispatch=useDispatch()

  const handleProduct=(id)=>{
   const product=cart.some((data)=>data.id===id)
   if(!product){
    const addItem=feature.filter((item)=>{
     
  return (
    item.id===id
  )

})
   
  
    dispatch(addProduct({
      
         Product:addItem
      
     
    }))
  }
  }
  console.log(cart)

 
const {data, isLoading,isError,error}= useQuery({
    queryKey:["products"],
    queryFn:()=>fetchApi()
 })


 if(isLoading){
    return <p>Loading...</p>
 }
 if(isError){
    return <p>Error:{error}</p>
 }



 const feature=data.products.filter((item)=>{
    return(
             item.rating>=3
    )
        })
        console.log(feature.id)
  return (

    <div className=" ring-1 ring-gray-100 rounded-md mx-5 my-10 shadow-sm">
        <div className="mx-6 my-3">
        <h1 className="text-2xl font-medium">Featured Products</h1>
       
        <p className="text-gray-400">Handpicked products just for you</p>
    </div>

    <div className=" grid grid-cols-2 md:grid-cols-4 ">


{
    feature.map((item)=>{
    
        return(
            
          
               
                    <div className=" shadow-sm rounded-md w-fit gap-3 ring-1 ring-gray-100 bg-blue-50 p-2 hover:shadow-md   m-6">
                      <div className="bg-black/6 rounded-md">
                <img src={item.thumbnail} alt="images" width="200px"   className="object-fit  "/>
                  <p className="flex mx-2 gap-2"><FaStar className="my-1 text-amber-300 "/><span>{item.rating}</span></p>
              </div> 


                <div className="mx-5">

              
               <p className="font-medium">{item.category}</p>
                <p className="font-medium">{item.title}</p>
            <div className="flex justify-between">
               <p className="font-medium">${item.price}</p>
               <p className="text-green-600">{item.discountPercentage}%off</p>
             </div>
               </div>
                 <button className="bg-blue-500 hover:bg-blue-700 cursor-pointer rounded-md w-full text-white px-3 py-1 " onClick={()=>handleProduct(item.id)}>Add to cart</button>
              </div>
           
           
        )
    })
}
</div>
    </div>
  )
}

export default FeaturedProduct