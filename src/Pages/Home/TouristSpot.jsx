import { Link } from "react-router-dom"
import { FaLocationDot } from "react-icons/fa6";
import { FaFileInvoiceDollar } from "react-icons/fa6";

const TouristSpot = ({categorie}) => {
    
    return (
        
       
 <>
   <div className="card   bg-purple-100 text-black hover:bg-white shadow-lg borde hover:text-black border-blue-100 hover:border-purple-700 hover:transition hover:duration-1000 ease-in  cursor-pointer hover:shadow-2xl">
  
  <figure className="h-full"><img className="transition-transform transform hover:transition hover:duration-1000 ease-in  cursor-pointer hover:scale-110 h-full" src={categorie.image} alt="Shoes" /></figure>
 
  <div className="card-body">
    <div className="flex flex-row items-center gap-1">
        <h1 className="text-2xl font-raleway font-bold hover:text-red-700">{categorie.tourists_spot_name}, </h1>
        <h1 className="text-2xl font-raleway font-bold hover:text-red-700">{categorie.country_Name}</h1>
        </div>
        
       <div>
       <h2 className='flex items-center gap-3 text-lg font-bold font-raleway hover:text-red-700'><FaLocationDot /> {categorie.location}</h2>
           
       </div>
       <div>
       <h2 className='flex items-center gap-3 text-lg font-bold font-raleway hover:text-red-700'><  FaFileInvoiceDollar /> {categorie.average_cost}</h2>
           
       </div>
    <div className="card-actions justify-end ">
      <Link to={`/singleProduct/${categorie._id}`}><div className="badge  badge-outline  border-none font-bold text-base  font-raleway btn rounded-3xl bg-[#5f2d70de]  hover:bg-[#4d205c] text-white">View Details</div> 
     </Link>
    
    </div>
  </div>
</div>


</>
    );
};

export default TouristSpot;