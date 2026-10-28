 import { Route,Routes,NavLink } from "react-router"
 import {QueryClientProvider,QueryClient} from "@tanstack/react-query"
 import Home from "./Pages/Home"
 import Main from "./Pages/Main"
import Description from "./Component/Description"
import Cart from "./Component/cart"
 function App() {
const query = new QueryClient()

  return (
    <div >
     <QueryClientProvider client={query}>
    
      <Routes>
      
        <Route  element={<Main/>}>
        <Route path="/" element={<Home/>}></Route>/
              <Route path="/description/:category" element={<Description/>}></Route>
              <Route path="/cart" element={<Cart/>}/>
        </Route>
     
      </Routes>
      </QueryClientProvider>
      </div>
  )
}

export default App
