import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async"

const SpotDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(` https://tourism-management-website-server.vercel.app/singleProduct/${id}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data)
        })
    },[id]);
    return (
        <div className="container mx-auto  mt-32">
            <Helmet><title>Journey-SpotDetails</title></Helmet>
           <div className="grid grid-cols-1  lg:grid-cols-2 gap-8 mt-6 mb-20 container mx-auto"  >
  <div className="rounded-2xl relative h-full w-full ">

      <img className="    rounded-2xl mx-auto  h-full w-full object-cover" src={product.image} alt="" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#03070CB3] rounded-xl"></div>
    </div>
         <div className="flex flex-col gap-5 space-y-2 p-4"> 
            <h1 className=" font-raleWay text-4xl font-bold hover:text-[#3d6c6c]">{product.country_Name}</h1>
            
            <div className='border  h-0 border-gray-400 mt-4 '></div>
            <h2 className='font-raleWay font-bold text-xl text-black'>{product.tourists_spot_name }</h2>
            <h2 className='flex items-center gap-3 text-lg font-bold font-raleway'><FaLocationDot /> {product.location}</h2>
           
            <div className='border  h-0 border-gray-400 mt-4 '></div>
            <h2 className='font-raleWay text-xl text-[#131313B3]'> Description: {product.short_description}</h2>
            <div className='border border-dashed  h-0 border-gray-400 mt-4 '></div>
            
            <h2 className='font-raleWay text-xl font-bold text-black'>Facilities:</h2>
            <div className='flex flex-col justify-starts items-startsr gap-5'>
            <div className="ml-5">
    
  
    <li className="text-gray-600 mb-2 text-base font-raleway font-bold">Total Visitors Per Year: {product.totalVisitorsPerYear}</li>
    <li className="text-gray-600 mb-2 text-base font-raleway font-bold">Travel Time: {product.travel_time}</li>
    <li className="text-gray-600 mb-4 text-base font-raleway font-bold">Seasonality: {product.seasonality}</li>
    </div>
            

</div>
            <div className='flex justify-center items-center gap-5'>

          
            
            <p className='p-4 rounded-full w-1/2 text-center bg-[#afc8cb] border-[#135D66] font-bold  text-black text-xs md:text-xl font-raleway'   >Price : <span className='text-red-500'>{product.average_cost}</span></p>
          
            </div>
     </div>
       
         </div>
         </div> 
       
    );
};

export default SpotDetails;