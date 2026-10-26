
import watch from "../assets/watch.png";
function Herosection() {
  return (
    <div>
        <div className="flex items-center  my-4 justify-between mx-5 py-12 bg-gradient-to-r from-blue-50 to-indigo-100 p-8 rounded-md">
    <div>
        <p ClassName="text-blue-800">DISCOVER YOUR STYLE</p>
        <h1 className="text-black text-4xl font-bold">ONLINE <br />  <span className="text-blue-600 "> SHOPPING</span></h1>
        <p  className="mt-4 text-gray-700 text-lg" >
            Find the  best products for your everyday needs
        </p>
        <button className="bg-blue-600 px-4 hover:bg-blue-800 cursor-pointer py-1 text-white rounded-md my-2">Expore Now</button>
    </div>
    <div  >
        <img className="rounded-md h-70 w-100" src={watch} alt="img1"  />
    </div>
</div>
    </div>
  )
}

export default Herosection