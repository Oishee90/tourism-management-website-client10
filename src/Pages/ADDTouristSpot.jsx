import UseAuth from "../Components/hook/UseAuth";


const ADDTouristSpot = () => {
    const {user} = UseAuth()
    return (
        <div className="container mx-auto mt-16">
   
  
        
  
        <div className="bg-[#faebd9] p-10 md:p-24">
           <h1 className="text-3xl font-ubuntu font-extrabold text-center"> Add Tourists Spot </h1> 

           <form  className=" bg-[#ffe4c4] mt-5 p-4 md:p-10 rounded-2xl" >
           <div className="flex md:flex-row flex-col gap-6 ">
           <div className="join flex-col gap-2 md:w-1/2">
            <label className="font-raleway font-bold text-xl">Tourists Spot Name
</label>
  <input className="input input-bordered join-item w-full" name="tourists_spot_name" placeholder=" Enter Tourists Spot Name"/>
  
</div>
<div className="join  flex-col gap-2 md:w-1/2">
<label className="font-raleway font-bold text-xl">Country Name</label>
  <input className="input input-bordered join-item w-full" name="country_Name" placeholder="Enter Country Name"/>
  
</div>

           </div>
{/* supplier test */}
           <div className="flex md:flex-row flex-col  gap-6 mt-5">
           <div className="join flex-col gap-2 md:w-1/2">
            <label className="font-raleway font-bold text-xl">Photo</label>
  <input className="input input-bordered join-item w-full" name="image" placeholder="Enter image_url"/>
  
</div>
<div className="join flex-col gap-2 md:w-1/2">
<label className="font-raleway font-bold text-xl">Location
</label>
  <input className="input input-bordered join-item w-full" name=" location
" placeholder=" Enter the location
"/>
  
</div>

           </div>
{/* seasonality and travel times */}
           <div className="flex md:flex-row flex-col gap-6 mt-5 ">
           <div className="join flex-col gap-2 md:w-1/2">
            <label className="font-raleway font-bold text-xl">Seasonality</label>
  <input className="input input-bordered join-item w-full" name="seasonality" placeholder="Enter Seasonal Information"/>
  
</div>
<div className="join flex-col gap-2 md:w-1/2">
<label className="font-raleway font-bold text-xl"> Travel time</label>
  <input className="input input-bordered join-item w-full" name="travel_time" placeholder="Enter travel time"/>
  
</div>

           </div>
        {/* avarge coset */}
<div className="flex md:flex-row flex-col gap-6 mt-5 ">
           <div className="join flex-col gap-2 md:w-1/2">
            <label className="font-raleway font-bold text-xl">Average Cost
</label>
  <input className="input input-bordered join-item w-full" name="average_cost" placeholder="Enter average cost"/>
  
</div>
<div className="join  flex-col gap-2 md:w-1/2">
<label className="font-raleway font-bold text-xl"> Total Number of Visitors</label>
  <input className="input input-bordered join-item w-full" name="totalVisitorsPerYear" placeholder="Enter Total Number of Visitors Annually"/>
  
</div>

           </div>
        
         {/* description */}
           <div className="join flex-col gap-2  md:w-full mt-5">
            <label className="font-raleway font-bold text-xl">Description</label>
  <textarea className="input input-bordered join-item  md:placeholder:pt-2 md:placeholder:pb-5"  name="short description" placeholder="Enter Description"/>
  
</div>
 {/* user email */}
 <div className="flex md:flex-row flex-col gap-6 mt-5 ">
           <div className="join flex-col gap-2 md:w-1/2">
            <label className="font-raleway font-bold text-xl">Your Email
</label>
  <input className="input input-bordered join-item w-full" name="email" value={`${user.email}`} disabled style={{ color: 'black' }}/>
  
</div>
<div className="join  flex-col gap-2 md:w-1/2">
<label className="font-raleway font-bold text-xl">Your Name</label>
  <input className="input input-bordered join-item w-full" name="name" value={`${user.displayName}`} disabled style={{ color: 'black' }}/>
  
</div>

           </div>
<input className="btn btn-block fomt-raleway font-bold mt-5 bg-[#D83F31] hover:bg-[#b2281b] text-white" type="submit" value="Add Tourist Spot" />
           </form>
        </div>
  
        </div>
    );
};

export default ADDTouristSpot;