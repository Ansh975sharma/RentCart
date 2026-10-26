
import Electronic from "../assets/Electronic.jpg";
import Beauty from "../assets/Beauty.jpg";
import books from "../assets/books.jpg";
import Living from "../assets/Living.jpg";
import Shoping from "../assets/Shoping.jpg";
import Sports from "../assets/Sports.jpg";
import { LuArrowBigRight } from "react-icons/lu";
import { NavLink } from "react-router";

function Category() {
  return (
    <div className=" ring-1 ring-gray-100 rounded-md mx-5 my-10 shadow-sm p-2">
      <div className="mx-3 mb-4">
        <h1 className="text-2xl font-bold text-blue-950">
          Shop by Category
        </h1>
        <p className="text-gray-400">
          Explore our wide range of Products
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">

        <NavLink to="/description/smartphones">
          <div className="rounded-md hover:shadow-sm bg-blue-100 p-3 text-center">
            <img
              className="mx-auto h-16 w-20 rounded-md object-contain"
              src={Electronic}
              alt="Electronics"
            />
            <div className="mt-2 flex items-center justify-between px-2">
              <h1 className="text-sm font-medium">Electronics</h1>
              <LuArrowBigRight size={16} />
            </div>
          </div>
        </NavLink>

        <NavLink to="/description/womens-dresses">
          <div className="rounded-md hover:shadow-sm bg-pink-100 p-3 text-center">
            <img
              className="mx-auto h-16 w-20 rounded-md object-contain"
              src={Shoping}
              alt="Fashion"
            />
            <div className="mt-2 flex items-center justify-between px-2">
              <h1 className="text-sm font-medium">Fashion</h1>
              <LuArrowBigRight size={16} />
            </div>
          </div>
        </NavLink>

        <NavLink to="/description/beauty">
          <div className="rounded-md hover:shadow-sm bg-purple-100 p-3 text-center">
            <img
              className="mx-auto h-16 w-20 rounded-md object-contain"
              src={Beauty}
              alt="Beauty"
            />
            <div className="mt-2 flex items-center justify-between px-2">
              <h1 className="text-sm font-medium">Beauty</h1>
              <LuArrowBigRight size={16} />
            </div>
          </div>
        </NavLink>

        <NavLink to="/description/sports-accessories">
          <div className="rounded-md hover:shadow-sm bg-green-100 p-3 text-center">
            <img
              className="mx-auto h-16 w-20 rounded-md object-contain"
              src={Sports}
              alt="Sports"
            />
            <div className="mt-2 flex items-center justify-between px-2">
              <h1 className="text-sm font-medium">Sports</h1>
              <LuArrowBigRight size={16} />
            </div>
          </div>
        </NavLink>

        <NavLink to="/description/mens-shirts">
          <div className="rounded-md hover:shadow-sm bg-yellow-100 p-3 text-center">
            <img
              className="mx-auto h-16 w-20 rounded-md object-contain"
              src={books}
              alt="Books"
            />
            <div className="mt-2 flex items-center justify-between px-2">
              <h1 className="text-sm font-medium">Books</h1>
              <LuArrowBigRight size={16} />
            </div>
          </div>
        </NavLink>

        <NavLink to="/description/furniture">
          <div className="rounded-md hover:shadow-sm bg-indigo-100 p-3 text-center">
            <img
              className="mx-auto h-16 w-20 rounded-md object-contain"
              src={Living}
              alt="Home and Living"
            />
            <div className="mt-2 flex items-center justify-between px-2">
              <h1 className="text-sm font-medium">Home & Living</h1>
              <LuArrowBigRight size={16} />
            </div>
          </div>
        </NavLink>

      </div>
    </div>
  );
}

export default Category;