import axios from "axios";

const Api=axios.create({
    baseURL:"https://dummyjson.com"
})

export const fetchApi= async ()=>{
const res=await Api.get("/products")
return res.data

}
export const fetchCategory=async (category)=>{
 const res= await Api.get(`/product/category/${category}`)
 return res.data
}