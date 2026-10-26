
import Product from "./Product";
 import Herosection from "../Component/Herosection";

import Category from "../Component/Category"
import FeaturedProduct from "../Component/featuredProduct";
import DiscountProducts from "../Component/discountProducts";

import { Outlet } from "react-router";


function Home() {

  return (

    <div>    

<Herosection/>
<Category/>
<Product/>
<FeaturedProduct/>

<DiscountProducts/>

</div>




  )
}

export default Home