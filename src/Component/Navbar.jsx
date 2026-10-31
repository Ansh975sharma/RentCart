
import { useState } from "react";
import { Link } from "react-router";
import { addProduct } from "../Features/Slice";
import { useSelector } from "react-redux";
import {LuHouse,LuPhone,LuCuboid,LuUser,LuInfo,LuShoppingCart,LuHeart,LuSearch,} from "react-icons/lu";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const cart=useSelector((state)=>state.cart.cart)

  return (
    <nav className="bg-blue-950 text-white px-4 py-3">
      <div className="flex items-center justify-between gap-4">

        
        <h1 className="flex  items-center gap-2 text-xl font-bold">
          <LuShoppingCart size={26} />
         E-Cart
        </h1>

       
        <div className="flex flex-1 items-center gap-2 rounded-lg bg-white px-3 py-2 text-gray-500 md:max-w-xs">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full  bg-transparent text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none"
          />
          <LuSearch size={20}  />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 lg:flex">
          <Link to="/" className="flex items-center gap-1  hover:text-blue-300">
            <LuHouse /> Home
          </Link>

          <Link to="/category" className="flex items-center gap-1  hover:text-blue-300">
            <LuCuboid /> Category
          </Link>

        <Link to="/about" className="flex items-center gap-1  hover:text-blue-300">
            <LuInfo /> About
          </Link>

          <Link to="/contact" className="flex items-center gap-1  hover:text-blue-300">
            <LuPhone /> Contact
          </Link>
        </div>

        
        <div className="hidden items-center gap-5 xl:flex">
          <Link to="/accounts" className="flex items-center gap-1  hover:text-blue-300">
            <LuUser /> Accounts
          </Link>

          <Link to="/wishlist" className="flex items-center gap-1  hover:text-blue-300">
            <LuHeart /> Wishlist
          </Link>

          <Link to="/cart" className="flex items-center gap-1  hover:text-blue-300">
            <LuShoppingCart /> Cart {cart.length}
          </Link>
        </div>

      
        <button
          className=" text-2xl lg:hidden"
          onClick={() => setMenu(!menu)}
         
        >
          ☰
        </button>
      </div>

   
      {menu && (
        <div className="mt-4 flex flex-col gap-4 border-t border-blue-800 pt-4 lg:hidden">
          <Link to="/" onClick={() => setMenu(false)} className="flex items-center gap-2 hover:text-blue-300">
            <LuHouse /> Home
          </Link>

          <Link to="/category" onClick={() => setMenu(false)} className="flex items-center gap-2 hover:text-blue-300">
            <LuCuboid /> Category
          </Link>

          <Link to="/about" className="flex items-center gap-1  hover:text-blue-300">
            <LuInfo /> About
          </Link>

          <Link to="/contact" onClick={() => setMenu(false)} className="flex items-center gap-2 hover:text-blue-300">
            <LuPhone /> Contact
          </Link>

          <Link to="/accounts" onClick={() => setMenu(false)} className="flex items-center gap-2">
            <LuUser /> Accounts
          </Link>

          <Link to="/wishlist" onClick={() => setMenu(false)} className="flex items-center gap-2">
            <LuHeart /> Wishlist
          </Link>

          <Link to="/cart" onClick={() => setMenu(false)} className="flex items-center gap-2">
            <LuShoppingCart /> Cart
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
