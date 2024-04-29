 // Assuming you have additional styles here
 import {Autoplay, Navigation, Pagination,  } from 'swiper/modules';

 import { Swiper, SwiperSlide } from 'swiper/react';

 // Import Swiper styles
 import 'swiper/css';
 import 'swiper/css/navigation';
 import 'swiper/css/pagination';
 import 'swiper/css/scrollbar';
 import banner1 from "../../assets/manuel-meurisse-sVITXInq_9k-unsplash.jpg"
 import banner2 from "../../assets/banner-1.jpg"
 import banner3 from "../../assets/banner-3.jpg"
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
 
const Banner = () => {
 

  return (
    <div className="container mx-auto  relative mt-20 mb-20" >
      
  
  <Swiper   
        pagination={{
          clickable: true,
        }}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
           

        <SwiperSlide className="text-red-500">
        <div className="relative  ">
            <img src={banner1} alt="" className="h-[450px] w-full object-cover  rounded-lg" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-lg"></div>
            <div className="absolute top-1/2 left-1/2 md:left-[36%] transform -translate-x-1/2 -translate-y-1/2 text-center md:text-left text-white">
    <h1 className=" text-2xl lg:text-5xl font-extrabold font-raleway mb-4 text-[#ffe4c4] ">Welcome to </h1>
     <h1 className='text-[#D83F31] text-2xl lg:text-5xl font-extrabold font-raleway mb-4'>
    <Typewriter
  options={{
    strings: ['JourneySEA','Your Gateway to Adventure!'],
    autoStart: true,
    loop: true,
  }}
/></h1>

    <p className="text-base md:text-lg  font-extrabold  text-gray-300  mt-5 mb-8 ">Find awesome flights, hotel, tour, car and packages</p>


    <Link className="inline-block px-6 py-3  text-white font-semibold rounded-full shadow-lg bg-[#D83F31] hover:bg-[#b2281b] transition duration-300"> Explore now</Link>
  </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative">
            <img src={banner2} alt="" className="h-[450px] w-full object-cover  rounded-lg" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black  rounded-lg"></div>
            <div  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
  
    <h1 className=" text-xl md:text-3xl font-extrabold font-raleway mb-4 ">Experience Comfort and Convenience </h1>

    <p className="text-lg text-gray-300 mt-5 mb-8">Enjoy Our Expert Tour Guides, and Seamless Transportation Services at JourneySEA!</p>
    <Link className="inline-block px-6 py-3  text-white font-semibold rounded-full shadow-lg bg-[#D83F31] hover:bg-[#b2281b] transition duration-300"> Explore now</Link>
  </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative">
            <img src={banner3} alt="" className="h-[450px] w-full object-cover  rounded-lg" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#03070CB3] rounded-lg"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
    <h1 className="text-xl md:text-3xl mt-5 font-extrabold font-raleway mb-4 ">Explore the world together </h1>

    <p className="text-base md:text-lg  text-gray-300 mt-8 mb-8"> Our immersive experiences bring people closer, fostering bonds and memories that last a lifetime</p>
 
 <Link className="inline-block px-6 py-3  text-white font-semibold rounded-full shadow-lg bg-[#D83F31] hover:bg-[#b2281b] transition duration-300"> Explore now</Link>
  </div>
          </div>
            </SwiperSlide>
    
        </Swiper>
        <div className="swiper-button-prev p-8 rounded-full absolute left-0 top-1/2 transform -translate-y-1/2" style={{ backgroundColor: 'black', color: 'white' }}></div>
      <div className="swiper-button-next p-8 rounded-full absolute right-0 top-1/2 transform -translate-y-1/2" style={{ backgroundColor: 'black', color: 'white' }}></div>
    
        </div>
       
   
  );
};

export default Banner;
