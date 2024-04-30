import { useEffect, useState } from "react";
import Banner from "./Banner";
import Clients from "./Clients";
import Explore from "./Explore";
import TouristSpot from "./TouristSpot";
import { Helmet } from "react-helmet-async"
import Countries from "./Countries";

const Home = () => {
    const [subcategories, setSubcategories] = useState([])
    const [countries,setCountries] = useState([])
    const categories = subcategories.slice(0,6)
    useEffect(()=>{
        fetch(" https://tourism-management-website-server.vercel.app/alltouristspot")
        .then(res => res.json())
        .then(data => {
            setSubcategories(data)
        })
    },[])
   
    useEffect(()=>{
        fetch("https://tourism-management-website-server.vercel.app/country")
        .then(res => res.json())
        .then(data => {
            setCountries(data)
        })
    },[])
    console.log(subcategories)

    return (
        <div className="container mx-auto">
            <Helmet><title>Journey-Home</title></Helmet>
            <Banner></Banner>

            <div className="mt-7 mb-7  ">
            <div className="font-ubuntu my-8 text-center space-y-6">
  <h1 className="text-2xl lg:text-4xl font-ubuntu font-extrabold  ">Discover the Charm of Southeast Asia</h1>
  <p className="text-base">From the serene landscapes of lush greenery to bustling cityscapes adorned with vibrant culture, each destination promises a unique experience. Explore the hidden gems of Bangladesh, Thailand, Indonesia, Malaysia, Vietnam, and Cambodia as you uncover their rich history, stunning natural wonders, and mouth-watering cuisine.
  </p>

   </div>  
   <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
    {
        countries.map(country => 
            <Countries key={country.id} country={country}>

            </Countries>
        )
    }
           
            </div>
            </div>
            <Explore></Explore>
            {/* tourist spot start */}
            <div className="mt-10 mb-7  ">
            <div className="font-ubuntu my-8 text-center space-y-6">
  <h1 className="text-2xl lg:text-4xl font-ubuntu font-extrabold  ">Discover Unforgettable Destinations  </h1>
  <p className="text-base">From breathtaking natural wonders to vibrant cultural hotspots, immerse yourself in the beauty and diversity of the worlds most captivating locations.

  </p>

   </div>  
   <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
    {
        categories.map(categorie => 
            <TouristSpot key={categorie.id} categorie={categorie}>

            </TouristSpot>
        )
    }
           
            </div>
            </div>
               {/* tourist spot end */}
          
           <Clients></Clients>
          

        </div>
    );
};

export default Home;