import {
  LuInstagram,
  LuFacebook,
  LuGithub,
  LuTwitter,
  LuHeart,
} from "react-icons/lu";

function Footer() {
  return (
    <footer className="bg-blue-950 text-white px-5 py-8 md:px-8">


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

     
        <div>
          <h1 className="text-xl font-semibold">RentCart</h1>

          <p className="text-gray-400 mt-2">
            Your one-stop shop for everything you need.
          </p>

          <div className="flex gap-5 my-4 text-xl">
            <LuFacebook className="cursor-pointer hover:text-blue-400" />
            <LuGithub className="cursor-pointer hover:text-gray-400" />
            <LuInstagram className="cursor-pointer hover:text-pink-400" />
            <LuTwitter className="cursor-pointer hover:text-sky-400" />
          </div>
        </div>

      
        <div>
          <h2 className="font-bold text-lg mb-2">Quick Links</h2>
          <ul className="space-y-1 text-gray-200">
            <li>Home</li>
            <li>Shop</li>
            <li>Categories</li>
            <li>Deals</li>
          </ul>
        </div>


        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="font-bold text-lg mb-2">Help</h2>
            <ul className="space-y-1 text-gray-200">
              <li>FAQs</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-2">Legal</h2>
            <ul className="space-y-1 text-gray-200">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Refund Policy</li>
            </ul>
          </div>
        </div>

       
        <div>
          <h2 className="font-semibold text-lg">
            Subscribe to our newsletter
          </h2>

          <p className="text-gray-300 mt-2">
            Get the latest updates and offers.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full min-w-0 rounded-md bg-white text-gray-800 px-3 py-2 outline-none"
            />

            <button
              type="button"
              className="bg-blue-600 hover:bg-blue-700 rounded-md px-4 py-2 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      <div className="mt-8 pt-5 border-t border-blue-900 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm sm:text-base">

        <p className="text-gray-300 text-center sm:text-left">
          © {new Date().getFullYear()} RentCart. All rights reserved.
        </p>

        <p className="flex items-center gap-2">
          Made with
          <LuHeart className="text-red-500" />
          by Ansh Sharma
        </p>

      </div>
    </footer>
  );
}

export default Footer;