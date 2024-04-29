import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2'


const Update = () => {
    const {id} = useParams();
    console.log(id)
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`http://localhost:4000/singleProduct/${id}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data)
        })
    },[id]);
    const handleUpdate = (e) => {
        e.preventDefault();
        const tourists_spot_name = e.target.tourists_spot_name.value;
        const country_Name = e.target.country_Name.value;
        const image = e.target.image.value;
        const location = e.target.location.value;
        const seasonality = e.target.seasonality.value;
        const travel_time = e.target.travel_time.value;
        const average_cost = e.target.average_cost.value;
        const totalVisitorsPerYear = e.target.totalVisitorsPerYear.value;
        const short_description = e.target.short_description.value;
       
        const info = {tourists_spot_name,country_Name,image,location,seasonality,travel_time,average_cost,totalVisitorsPerYear,short_description}

        console.log(info)
        fetch(`http://localhost:4000/update/${id}`,{
            method:"PUT",
            headers: {"Content-type" : "application/json"},
            body:JSON.stringify(info)
        })
        .then(res => res.json())
        .then(data => {
              if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Update Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
              }
        })
    }
    return (
        <div className="container mx-auto mt-16">
   
  
        
  
        <div className="bg-[#faebd9] p-10 md:p-24">
           <h1 className="text-3xl font-ubuntu font-extrabold text-center"> Update Tourists Spot Information </h1> 

           <form onSubmit={handleUpdate}  className=" bg-purple-100 mt-5 p-4 md:p-10 rounded-2xl" >
           <div className="flex md:flex-row flex-col gap-6 ">
           <div className="join flex-col gap-2 md:w-1/2">
            <label className="font-raleway font-bold text-xl">Tourists Spot Name
</label>
  <input className="input input-bordered join-item w-full" type="text" defaultValue={product.tourists_spot_name} name="tourists_spot_name" placeholder=" Enter Tourists Spot Name"/>
  
</div>
<div className="join  flex-col gap-2 md:w-1/2">
<label className="font-raleway font-bold text-xl">Country Name</label>
  <input className="input input-bordered join-item w-full" type="text" defaultValue={product.country_Name} name="country_Name" placeholder="Enter Country Name"/>
  
</div>

           </div>
{/* supplier test */}
           <div className="flex md:flex-row flex-col  gap-6 mt-5">
           <div className="join flex-col gap-2 md:w-1/2">
            <label className="font-raleway font-bold text-xl">Photo</label>
  <input className="input input-bordered join-item w-full" type="text" defaultValue={product.image} name="image" placeholder="Enter image_url"/>
  
</div>
<div className="join flex-col gap-2 md:w-1/2">
<label className="font-raleway font-bold text-xl">Location
</label>
  <input className="input input-bordered join-item w-full" type="text" defaultValue={product.location}  name="location" placeholder=" Enter the location
"/>
  
</div>

           </div>
{/* seasonality and travel times */}
           <div className="flex md:flex-row flex-col gap-6 mt-5 ">
           <div className="join flex-col gap-2 md:w-1/2">
            <label className="font-raleway font-bold text-xl">Seasonality</label>
  <input className="input input-bordered join-item w-full" type="text" defaultValue={product.seasonality} name="seasonality" placeholder="Enter Seasonal Information"/>
  
</div>
<div className="join flex-col gap-2 md:w-1/2">
<label className="font-raleway font-bold text-xl"> Travel time</label>
  <input className="input input-bordered join-item w-full" type="text" defaultValue={product.travel_time} name="travel_time" placeholder="Enter travel time"/>
  
</div>

           </div>
        {/* avarge coset */}
<div className="flex md:flex-row flex-col gap-6 mt-5 ">
           <div className="join flex-col gap-2 md:w-1/2">
            <label className="font-raleway font-bold text-xl">Average Cost
</label>
  <input className="input input-bordered join-item w-full" type="tell" defaultValue={product.average_cost} name="average_cost" placeholder="Enter average cost"/>
  
</div>
<div className="join  flex-col gap-2 md:w-1/2">
<label className="font-raleway font-bold text-xl"> Total Number of Visitors</label>
  <input className="input input-bordered join-item w-full" type="tell" defaultValue={product.totalVisitorsPerYear} name="totalVisitorsPerYear" placeholder="Enter Total Number of Visitors Annually"/>
  
</div>

           </div>
        
         {/* description */}
           <div className="join flex-col gap-2  md:w-full mt-5">
            <label className="font-raleway font-bold text-xl">Description</label>
  <textarea className="input input-bordered join-item  md:placeholder:pt-2 md:placeholder:pb-5" type="text" defaultValue={product.short_description}  name="short_description" placeholder="Enter Description"/>
  
</div>


<input className="btn btn-block fomt-raleway font-bold mt-5 bg-[#D83F31] hover:bg-[#b2281b] text-white" type="submit" value="Update  Tourist Spot" />
           </form>
        </div>
  
        </div>
    );
};

export default Update;