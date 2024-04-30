import explore1 from "../../assets/explore-1.jpg"
import explore2 from "../../assets/explore-2.jpg"
import explore3 from "../../assets/explore-3.jpg"
import Typewriter from 'typewriter-effect';
import { Fade } from "react-awesome-reveal";

const Explore = () => {
    return (
        <div className="mt-24 mb-7 container mx-auto ">
           <div className="font-ubuntu my-8 text-center space-y-6">
  <h1 className="text-2xl lg:text-4xl font-ubuntu font-extrabold ">Explore Boundless Possibilities</h1>
  <p className="text-base">With JourneySEA, every adventure is an opportunity to explore, discover, and create unforgettable memories.
  </p>

   </div>
   <div className="grid  mt-7 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 m-5 ">
    <div className="card flex flex-col justify-center items-start gap-0 p-4  md:py-10 ">
        <h1 className="font-ubuntu  md:text-3xl font-medium">Go beyond your <br />imagination</h1>
        <div className="border-b-2 w-[81px] mt-2 border-indigo-500 ... mb-6"></div>
<p className="font-raleway text-base md:text-xl">Discover your ideal experience with us</p>

    </div>
    <Fade triggerOnce={true} direction="up">
    <div className="card  bg-base-100 shadow-xl image-full h-[100%] ">
  <figure className="h-full  "><img className="h-full " src={explore1} alt="Shoes" /></figure>
  <div className="card-body justify-center items-center my-auto">
   
   
<h1 className="font-raleway text-2xl font-bold  text-white">7% discount for 
<span className="text-[#D83F31] text-3xl  font-extrabold mt-2">
<Typewriter
  options={{
    strings: ['AllAirlines'],
    autoStart: true,
    loop:true,
  }}
/></span></h1>
    
  </div>
</div>
</Fade >
<Fade triggerOnce={true}  direction="up">
    <div className="card  bg-base-100 shadow-xl image-full h-[100%]">
  <figure className="h-full"><img className="h-full" src={explore2} alt="Shoes" /></figure>
  <div className="card-body justify-center items-center my-auto">
   
   
<h1 className="font-raleway text-2xl font-bold  text-white">Travel Around The
<span className="text-[#D83F31] text-3xl font-extrabold mt-2">
<Typewriter
  options={{
    strings: [' World'],
    autoStart: true,
    loop: true,
  }}
/></span></h1>
    
  </div>
</div>
</Fade >

<Fade triggerOnce={true} direction="up">
    <div className="card  bg-base-100 shadow-xl image-full h-[100%]">
  <figure className="h-full"><img className="h-full" src={explore3} alt="Shoes" /></figure>
  <div className="card-body justify-center items-center my-auto">
   
   
<h1 className="font-raleway text-2xl font-bold  text-white">Luxury resorts With
<span className="text-[#D83F31] text-3xl font-extrabold mt-2">
<Typewriter
  options={{
    strings: [' Top Deals'],
    autoStart: true,
    loop:true ,
  }}
/></span></h1>
    
  </div>
</div>
</Fade >
   </div>
   {/* card-2 */}

        </div>
    );
};

export default Explore;