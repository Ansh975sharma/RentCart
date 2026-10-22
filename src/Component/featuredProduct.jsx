import { useQuery } from "@tanstack/react-query"
import { fetchApi } from "../API/Api"
import { FaStar } from "react-icons/fa"
function FeaturedProduct() {
const {data, isLoading,isError}= useQuery({
    queryKey:["products"],
    queryFn:()=>fetchApi()
 })


 if(isLoading){
    return <p>Loading...</p>
 }
 if(isError){
    return <p>Error:{error}</p>
 }

 const feature=   data.products.filter((item)=>{
    return(
             item.rating>=3
    )
        })
  return (

    <div>
        <div className="mx-6 my-3">
        <h1 className="text-2xl font-medium">Featured Products</h1>
       
        <p className="text-gray-400">Handpicked products just for you</p>
    </div>

    <div className=" grid grid-cols-2 md:grid-cols-4 ">


{
    feature.map((item)=>{
    
        return(
            
          
               
                    <div className=" shadow-md rounded-md w-fit gap-3 p-2 hover:shadow-2xl   mx-6">
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
                 <button className="bg-blue-500 rounded-md w-full text-white px-3 py-1 ">Add to cart</button>
              </div>
           
           
        )
    })
}
</div>
    </div>
  )
}

export default FeaturedProduct