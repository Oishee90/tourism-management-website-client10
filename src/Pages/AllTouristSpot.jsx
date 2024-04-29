import { Link } from "react-router-dom";

const AllTouristSpot = () => {
    return (
        <div className="mt-20 container mx-auto">
             <div className="bg-[#faebd9] rounded-xl p-10 md:p-16">
            <h1 className="text-3xl font-bold text-center mb-8">Discover Amazing Tourist Spots</h1>
            <div className="flex justify-center mb-4">
                <select className="p-2 border border-gray-300 rounded-md">
                    <option value="">Sort by Cost</option>
                    <option value="ascending">Minimum Cost</option>
                    <option value="descending">Maximum Cost</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             
                {/* Add more card components for other tourist spots */}
                <div className="bg-white rounded-xl overflow-hidden transition-transform transform hover:transition hover:duration-1000 ease-in border border-purple-200 hover:border-purple-400  cursor-pointer hover:shadow-2xl">
                <figure className="px-5 pt-5 "><img className="rounded-xl transition-transform transform hover:transition hover:duration-1000 ease-in  cursor-pointer hover:scale-110" src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
 
                    <div className="p-4">
                        <h2 className="text-xl font-extrabold font-ubuntu mb-2">Tourist Spot 1</h2>
                        <div className="ml-5">

                        <li className="text-gray-600 mb-2 text-base font-raleway font-bold">Average Cost: $100</li>
                        <li className="text-gray-600 mb-2 text-base font-raleway font-bold">Total Visitors Per Year: 10000</li>
                        <li className="text-gray-600 mb-2 text-base font-raleway font-bold">Travel Time: 2 hours</li>
                        <li className="text-gray-600 mb-4 text-base font-raleway font-bold">Seasonality: All year</li>
                        </div>
                       
                        <div className="card-actions justify-start ">
      <Link><div className="badge  badge-outline  border-none font-bold text-base  font-raleway btn rounded-3xl bg-[#5f2d70de]  hover:bg-[#4d205c] text-white">View Details</div> 
     </Link>
    
    </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <img src="tourist_spot_image_1.jpg" alt="Tourist Spot 1" className="w-full h-64 object-cover object-center" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">Tourist Spot 1</h2>
                        <p className="text-gray-600 mb-2">Average Cost: $100</p>
                        <p className="text-gray-600 mb-2">Total Visitors Per Year: 10000</p>
                        <p className="text-gray-600 mb-2">Travel Time: 2 hours</p>
                        <p className="text-gray-600 mb-4">Seasonality: All year</p>
                        <button className="block w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">View Details</button>
                    </div>
                </div>



                </div>
            </div>
        </div>
    );
};

export default AllTouristSpot;
