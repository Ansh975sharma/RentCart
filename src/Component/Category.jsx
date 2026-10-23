import Electronic from "../assets/Electronic.jpg"
import Beauty from "../assets/Beauty.jpg"
import books from "../assets/books.jpg"
import Living from "../assets/Living.jpg"
import Shoping from "../assets/Shoping.jpg"
import Sports from "../assets/Sports.jpg"
import { useState } from 'react'
import { LuArrowBigRight } from "react-icons/lu"
import {useQuery} from "@tanstack/react-query"
import { fetchCategory } from "../API/Api"

function Category() {
    const[categoryData,setCategoryData]=useState("")
 
   const {data , isLoading,isError,error}= useQuery({
        queryKey:['post',categoryData],
        queryFn:()=>fetchCategory(categoryData),
          enabled: Boolean(categoryData)
    })
    console.log(data)
  if(isLoading){
    return(
      <p>Loading...</p>
    )
  }
  if(isError){
    return  <p>Error: {error.message}</p>
    
  }

  return (
  
    <div>

    
         <div className="mx-2">
            <div className="mx-3">
            <h1 className="text-2xl font-bold text-blue-950">Shop by Category</h1>
            <p className="text-gray-400">Explore our wide range of Products</p>
            </div>
            <div className="grid md:grid-cols-3">
             
                   <div className="flex my-3 bg-blue-200 gap-4 p-3 mx-3 rounded-md relative">

  <img
    className="rounded-md"
    src={Electronic}
    alt="Electronic-gadgets"
    width="150"
  />

  <div className="my-4">
    <h1 className="text-xl font-medium">Electronics</h1>
    <p>Gadgets & tech</p>

    <button
      className="absolute bottom-3 right-3"
      onClick={() => setCategoryData("smartphones")}
    >
      <LuArrowBigRight  />
    </button>
  </div>

</div>
                {/* </div> */}
               
                <div className="flex my-3 bg-pink-100 gap-4 p-3 mx-3 relative rounded-md">
                    <img className="rounded-md" src={Beauty} alt="Beauty" width='100' />
                    <div className="my-4">
                    <h1 className="text-xl font-medium">Beauty</h1>
                    <p>Care & Skincare</p>
                      <button className="absolute bottom-3 right-3" onClick={()=>setCategoryData("beauty")}><LuArrowBigRight/></button>
                    </div>
                   
                </div>
                <div className="flex my-3 bg-green-100 gap-4 p-3 mx-3 relative rounded-md">
                    <img className="rounded-md" src={books} alt="books" width='100' />
                    <div className="my-4">
                    <h1 className="text-xl font-medium">Books</h1>
                    <p>Read & discover</p>
                      <button className="absolute bottom-3 right-3" onClick={()=>setCategoryData("mens-shirts")}><LuArrowBigRight/></button>
                    </div>
                   
                </div>
                <div className="flex my-3 bg-gray-100 gap-4 p-3 mx-3 relative rounded-md">
                    <img className="rounded-md" src={Sports} alt="Sports" width='100' />
                    <div className="my-4">
                    <h1 className="text-xl font-medium">Sports</h1>
                    <p>Fitness & outdoor</p>
                      <button className="absolute bottom-3 right-3" onClick={()=>setCategoryData("sports-accessories")}><LuArrowBigRight/></button>
                    </div>
                   
                </div>
                <div className="flex my-3 bg-pink-100 gap-4 p-3 mx-3 relative rounded-md">
                    <img className="rounded-md" src={Shoping} alt="Shopping" width='100' />
                    <div className="my-4">
                    <h1 className="text-xl font-medium">Fashion</h1>
                    <p>Style & clothing</p>
                      <button className="absolute bottom-3 right-3" onClick={()=>setCategoryData("womens-dresses")}><LuArrowBigRight/></button>
                    </div>
                   
                </div>
                <div className="flex my-3 bg-yellow-100 gap-4 p-3 mx-3 relative rounded-md">
                    <img className="rounded-md" src={Living} alt="Home&Living" width='100' />
                    <div className="my-4">
                    <h1 className="text-xl font-medium">Home & Living</h1>
                    <p>Make home better</p>
                      <button className="absolute bottom-3 right-3" onClick={()=>setCategoryData("furniture")}><LuArrowBigRight/></button>
                    </div>
                   
                </div>
            </div>
         </div>
    
         </div>
  
  )
}

export default Category