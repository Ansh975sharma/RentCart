import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router"
import { fetchCategory } from "../API/Api"
import { FaStar } from "react-icons/fa"
function Description() {
const {category}=useParams()
  const {data,isLoading,isError,error}=useQuery({
    queryKey:["categoryData",category],
    queryFn:()=>fetchCategory(category),
     
  })
  console.log(data)
  if(isLoading){
    return <p>Loading...</p>
  }
  if(isError){
    return <p>Error:{error.message}</p>
  }
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 max-w-7xl mx-auto px-4">
      {
        data.products.map((item)=>{
          return(
           
            <div className="w-full rounded-xl p-3 shadow-sm ring-1 ring-gray-100"  >
            <img src={item.thumbnail} alt=" Product-image" width="200"
            
               className="w-full h-48 object-contain bg-gray-50 rounded-md"
             />
            <div className="my-2">
              <p className="text-l font-semibold">{item.title}</p>
              <p className="flex gap-2"> <FaStar className="my-1 text-yellow-500 "/>{item.rating}</p>
              <p>$ {item.price}</p>
              <button className="bg-blue-950 w-full rounded-md text-white py-0.5">View Product </button>
            </div>
              </div>
             
          )
        })
      }
    </div>
  )
}

export default Description