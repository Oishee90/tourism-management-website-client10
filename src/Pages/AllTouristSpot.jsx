import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AllTouristSpot = () => {
    const [alltouristSpots, setAlltouristSpot] = useState([])
    const [order, setOrder] = useState("");
    useEffect(()=>{
        fetch(" https://tourism-management-website-server.vercel.app/alltouristspot")
        .then(res => res.json())
        .then(data => {
            setAlltouristSpot(data)
        })
    },[])
    
    
    const handleSortChange = (e) => {
        const selectedSortOrder = e.target.value;
        setOrder(selectedSortOrder); 
    
        const sortedSpots = [...alltouristSpots].sort((a, b) => {
            // Remove dollar signs and parse average_cost to numbers
            const costA = parseInt(a.average_cost.replace(/\$/g, ''));
            const costB = parseInt(b.average_cost.replace(/\$/g, ''));
    
            if (!isNaN(costA) && !isNaN(costB)) {
                if (selectedSortOrder === "ascending") {
                    return costA - costB;
                } else if (selectedSortOrder === "descending") {
                    return costB - costA;
                }
            } else {
                console.error("Error: Unable to parse average_cost to number.", a.average_cost, b.average_cost);
            }
    
            return 0;
        });
    
        setAlltouristSpot(sortedSpots);   
    };
    
    


    
    return (
        <div className="mt-20 container mx-auto">
            <Helmet><title>Journey-AllSpot</title></Helmet>
             <div className="bg-[#faebd9] rounded-xl p-10 md:p-16">
            <h1 className="text-3xl font-bold text-center mb-8">Discover Amazing Tourist Spots</h1>
            <div className="flex justify-center mb-4">
                <select className="p-2 border border-gray-300 rounded-md"  value={order} onChange={handleSortChange}>
                    <option value="">Sort by Cost</option>
                    <option value="ascending">Minimum Cost</option>
                    <option value="descending">Maximum Cost</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {
                alltouristSpots.map( alltouristSpot =>
                    <div key={alltouristSpot.id} className="card  bg-white rounded-xl overflow-hidden transition-transform transform hover:transition hover:duration-1000 ease-in border border-purple-200 hover:border-purple-400  cursor-pointer hover:shadow-2xl">

<figure className="h-full"><img className="transition-transform transform hover:transition hover:duration-1000 ease-in  cursor-pointer hover:scale-110 h-full" src={alltouristSpot.image} alt="Shoes" /></figure>
 
 <div className="card-body">
   <div className="flex flex-row items-center gap-1">
       <h1 className="text-2xl font-raleway font-bold hover:text-red-700">{alltouristSpot.tourists_spot_name}, </h1>
       
       </div>
       
       <h1 className="text-2xl font-raleway font-bold hover:text-red-700">{alltouristSpot.country_Name}</h1>
       
       <div className="ml-5">
    
    <li className="text-gray-600 mb-2 text-base font-raleway font-bold">Average Cost: {alltouristSpot.average_cost}</li>
    <li className="text-gray-600 mb-2 text-base font-raleway font-bold">Total Visitors Per Year: {alltouristSpot.totalVisitorsPerYear}</li>
    <li className="text-gray-600 mb-2 text-base font-raleway font-bold">Travel Time: {alltouristSpot.travel_time}</li>
    <li className="text-gray-600 mb-4 text-base font-raleway font-bold">Seasonality: {alltouristSpot.seasonality}</li>
    </div>
                    {/* <figure className="h-full"><img className="rounded-xl h-full transition-transform transform hover:transition hover:duration-1000 ease-in  cursor-pointer hover:scale-110" src={alltouristSpot.image} alt="Shoes" /></figure>
     
                        <div className="p-4">
                            <h2 className="text-xl font-extrabold font-ubuntu mb-2"></h2>
                            <div className="ml-5">
    
                            <li className="text-gray-600 mb-2 text-base font-raleway font-bold">Average Cost: {alltouristSpot.average_cost}</li>
                            <li className="text-gray-600 mb-2 text-base font-raleway font-bold">Total Visitors Per Year: {alltouristSpot.totalVisitorsPerYear}</li>
                            <li className="text-gray-600 mb-2 text-base font-raleway font-bold">Travel Time: {alltouristSpot.travel_time}</li>
                            <li className="text-gray-600 mb-4 text-base font-raleway font-bold">Seasonality: {alltouristSpot.seasonality}</li>
                            </div> */}
                           
                            <div className="card-actions justify-start ">
          <Link to={`/singleProduct/${alltouristSpot._id}`}><div className="badge  badge-outline  border-none font-bold text-base  font-raleway btn rounded-3xl bg-[#5f2d70de]  hover:bg-[#4d205c] text-white">View Details</div> 
         </Link>
        
        </div>
                        </div>
                    </div>
                
                )
             }
                {/* Add more card components for other tourist spots */}
                
            



                </div>
            </div>
        </div>
    );
};

export default AllTouristSpot;
