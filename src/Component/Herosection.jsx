
import img1 from "../assets/img1.jpg";
function Herosection() {
  return (
    <div>
        <div className="flex items-center  my-4 justify-between py-12 bg-blue-200 p-8">
    <div>
        <h1 className="text-blue-400 text-4xl font-bold">ONLINE <br />  <span className="text-blue-900 "> SHOPPING</span></h1>
        <p  className="mt-4 text-gray-700 text-lg" >
            Find the  best products for your everyday needs
        </p>
        <button className="bg-blue-900 px-4 py-1 text-white rounded-xl my-2">Expore Now</button>
    </div>
    <div  >
        <img className="rounded-md" src={img1} alt="img1" width="350" />
    </div>
</div>
    </div>
  )
}

export default Herosection