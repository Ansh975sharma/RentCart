import { useQuery } from "@tanstack/react-query"

import { discountProduct } from "../API/Api"

function DiscountProducts() {

    const {data:categoryFirst,isError,isLoading}=useQuery({
        queryKey:["discountPro"],
        queryFn:()=>discountProduct("smartPhones")
    })
    const {data:categorySecond}=useQuery({
        queryKey:["product"],
        queryFn:()=>discountProduct("womens-dresses")
    })

 
    if(isLoading){
        return(
            <p>Loading...</p>
        )
    }
    if(isError){
        <p>Error{error}</p>
    }
   


   const productFirst= categoryFirst.products.filter((item)=>{
        return(
            item.discountPercentage>10
        )
    })
   const productSecond=  categorySecond.products.filter((item)=>{
        return(
            item.discountPercentage>10
        )
    })

  return (
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4 my-5">

  {/* Electronics Banner */}
  <div className="bg-purple-300 rounded-xl overflow-hidden">
    {productFirst.map((item) => (
      <div key={item.id} className="flex items-center justify-between px-5 py-4 ">

        <div className="flex flex-col items-start gap-1">
          <p className="text-xs font-semibold text-purple-700">
            UP TO {item.discountPercentage}% OFF
          </p>

          <h2 className="text-lg font-bold text-slate-800">
            Top Electronics
          </h2>

          <p className="text-sm text-slate-600">
            Latest gadgets, best prices
          </p>

          <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-4 py-2 rounded-full">
            Shop Now →
          </button>
        </div>

        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-28 h-28 md:w-32 md:h-32 object-contain shrink-0 bg-black/4 rounded-md"
        />

      </div>
    ))}
  </div>

  {/* Fashion Banner */}
  <div className="bg-orange-100 rounded-xl overflow-hidden">
    {productSecond.map((item) => (
      <div key={item.id} className="flex items-center justify-between px-5 py-4 ">

        <div className="flex flex-col items-start gap-1">
          <p className="text-xs font-semibold text-orange-600">
            FLAT {item.discountPercentage}%OFF
          </p>

          <h2 className="text-lg font-bold text-slate-800">
            Fashion Collection
          </h2>

          <p className="text-sm text-slate-600">
            Style that suits you
          </p>

          <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-4 py-2 rounded-full ">
            Shop Now →
          </button>
        </div>

        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-28 h-28 md:w-32 md:h-32 object-contain shrink-0 bg-black/4 rounded-md"
        />

      </div>
    ))}
  </div>

</div>
  )
}

export default DiscountProducts

