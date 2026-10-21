import axios from "axios";

const Api=axios.create({
    baseURL:"https://dummyjson.com"
})

export const fetchApi= async ()=>{
const res=await Api.get("/products?limit=6")
return res.data

}
export const fetchCategory=async (category)=>{
 const res= await Api.get(`/product/category/${category}`)
 return res.data
}

