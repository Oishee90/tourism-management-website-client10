import { Link } from "react-router-dom"
import { FaLocationDot } from "react-icons/fa6";
import { FaFileInvoiceDollar } from "react-icons/fa6";

const TouristSpot = () => {
    return (
        
       
 <>
   <div className="card   bg-purple-100 text-black hover:bg-white shadow-lg borde hover:text-black border-blue-100 hover:border-purple-700 hover:transition hover:duration-1000 ease-in  cursor-pointer hover:shadow-2xl">
  <figure><img className="transition-transform transform hover:transition hover:duration-1000 ease-in  cursor-pointer hover:scale-110" src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
 
  <div className="card-body">
    <div className="flex flex-row items-center gap-1">
        <h1 className="text-2xl font-raleway font-bold hover:text-red-700">Sundorbon , </h1>
        <h1 className="text-2xl font-raleway font-bold hover:text-red-700">Country Name</h1>
        </div>
        
       <div>
       <h2 className='flex items-center gap-3 text-lg font-bold font-raleway hover:text-red-700'><FaLocationDot /> category.location</h2>
           
       </div>
       <div>
       <h2 className='flex items-center gap-3 text-lg font-bold font-raleway hover:text-red-700'><  FaFileInvoiceDollar /> cost</h2>
           
       </div>
    <div className="card-actions justify-end ">
      <Link><div className="badge  badge-outline  border-none font-bold text-base  font-raleway btn rounded-3xl bg-[#5f2d70de]  hover:bg-[#4d205c] text-white">View Details</div> 
     </Link>
    
    </div>
  </div>
</div>
{/* card-2 */}
<div className="card bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
{/* card-3 */}
<div className="card bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
{/* card-4 */}
<div className="card bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
</>
    );
};

export default TouristSpot;