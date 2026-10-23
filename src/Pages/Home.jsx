
import Product from "./Product";
 import Herosection from "../Component/Herosection";
import Navbar from "../Component/Navbar"
import Category from "../Component/Category"
import FeaturedProduct from "../Component/featuredProduct";
import DiscountProducts from "../Component/discountProducts";
import Footer from "../Component/Footer";


function Home() {

  return (

    <div>    
<Navbar/>
<Herosection/>
<Category/>
<Product/>
<FeaturedProduct/>

<DiscountProducts/>
<Footer/>
</div>




  )
}

export default Home