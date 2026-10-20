import React from 'react'
import { LuUser,LuShoppingCart ,LuSearch} from "react-icons/lu";
function Navbar() {
  return (
    <div className='bg-blue-500 text-white p-3'>
        <div className="flex justify-between m-3 ">
        <h1>RentCart</h1>
        <div className='flex gap-5'>
        <LuUser/>
        <LuShoppingCart/>
        </div>
         </div>
         <div className='flex text-black bg-white rounded-md p-2 gap-3 '>
            <LuSearch className='my-2'/>
            <input 
            type="text"
            placeholder="Search for Products..."
            />
         </div>

    </div>
  )
}

export default Navbar