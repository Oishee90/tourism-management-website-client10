import Banner from "./Banner";
import Clients from "./Clients";
import Explore from "./Explore";
import TouristSpot from "./TouristSpot";


const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            {/* tourist spot start */}
            <div className="mt-7 mb-7  ">
            <div className="font-ubuntu my-8 text-center space-y-6">
  <h1 className="text-2xl lg:text-4xl font-ubuntu font-extrabold  ">Discover Unforgettable Destinations</h1>
  <p className="text-base">From breathtaking natural wonders to vibrant cultural hotspots, immerse yourself in the beauty and diversity of the worlds most captivating locations.

  </p>

   </div>  
   <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
            <TouristSpot></TouristSpot>
            </div>
            </div>
               {/* tourist spot end */}
            <Explore></Explore>
           <Clients></Clients>
          

        </div>
    );
};

export default Home;