 import { Route,Routes,NavLink } from "react-router"
 import {QueryClientProvider,QueryClient} from "@tanstack/react-query"
 import Home from "./Pages/Home"

 function App() {
const query = new QueryClient()

  return (
    <div >
     <QueryClientProvider client={query}>
    
      <Routes>
      
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      </QueryClientProvider>
      </div>
  )
}

export default App
