
import Product from "./Product";

import { FaArrowRight  } from "react-icons/fa";

  import Herosection from "../Component/Herosection";
import Navbar from "../Component/Navbar"
import Category from "../Component/Category"

function Home() {

  return (

    <div>
       
     
<Navbar/>



<Herosection/>

<Category/>
<Product/>

</div>




  )
}

export default Home