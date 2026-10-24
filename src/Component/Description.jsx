import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router"
import { fetchCategory } from "../API/Api"
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
    <div>
      {
        data.products.map((item)=>{
          return(
            <div>
              <p>{item.title}</p>
              </div>
          )
        })
      }
    </div>
  )
}

export default Description