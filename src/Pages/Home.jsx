
import Product from "./Product";
 import Herosection from "../Component/Herosection";
import Navbar from "../Component/Navbar"
import Category from "../Component/Category"
import FeaturedProduct from "../Component/featuredProduct";

function Home() {

  return (

    <div>
       
     
<Navbar/>



<Herosection/>

<Category/>
<Product/>
<FeaturedProduct/>

</div>




  )
}

export default Home