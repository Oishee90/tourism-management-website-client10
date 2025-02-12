import { useEffect, useState } from "react";
import UseAuth from "../Components/hook/UseAuth";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { Helmet } from "react-helmet-async";

const MyList = () => {
    const {user} = UseAuth() || {};
    const [items,setItem]=useState([])
    const [control,setControl]=useState(false)
    useEffect(() => {
        fetch(` https://tourism-management-website-server.vercel.app/myList/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setItem(data)
        })
    },[user,control])
 const handleDelete = (id) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(` https://tourism-management-website-server.vercel.app/delete/${id}`,{
        method:"Delete",

    })
    .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your this Bucket List Are Deleted",
                    icon: "success"
                  });
                setControl(!control)
            }
        })
          
        }
      });
    

 }
    return (
        <div className="container mx-auto mt-20 bg-[#faebd9] min-h-screen">
            <Helmet><title>Journey-MyList</title></Helmet>
            <div className="font-ubuntu my-8 text-center space-y-6 mt-10 mb-10">
  <h1 className="text-2xl lg:text-4xl font-ubuntu font-extrabold p-10">Adventures in Your Bucket List</h1>
  

   
    </div>
            <table className="w-full border-collapse border border-gray-200 rounded-lg">
                <thead className="bg-gray-100 ">
                    <tr>
                        <th className="border font-extrabold font-ubuntu border-gray-300 hover:bg-white px-4 py-2">Tourist Spot Name</th>
                        <th className="border font-extrabold font-ubuntu border-gray-300 hover:bg-white px-4 py-2">Location</th>
                        <th className="border font-extrabold font-ubuntu border-gray-300 hover:bg-white px-4 py-2">Avarage Cost</th>
                        <th className="border font-extrabold font-ubuntu border-gray-300 hover:bg-white px-4 py-2">Travel Time</th>
                        <th className="border font-extrabold font-ubuntu border-gray-300 hover:bg-white px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-purple-100">
                    {items.map(item => (
                        <tr key={item.id}>
                            <td className="border font-raleway font-bold hover:bg-purple-200 border-gray-300 px-4 py-2">{item.tourists_spot_name}</td>
                            <td className="border  font-raleway font-bold hover:bg-purple-200 border-gray-300 px-4 py-2">{item.location}</td>
                            <td className="border  font-raleway font-bold hover:bg-purple-200 border-gray-300 px-4 py-2">{item.travel_time}</td>
                            <td className="border  font-raleway font-bold hover:bg-purple-200 border-gray-300 px-4 py-2">{item.average_cost}</td>
                            <td className="border  font-raleway font-bold border-gray-300 px-4 py-2 flex justify-between space-x-2">
                                <Link to={`/update/${item._id}`}><button className="transition duration-1000 ease-in  cursor-pointer bg-[#5f2d70de]  hover:bg-[#4d205c] font-ubuntu text-white font-bold py-2 px-4 rounded">
                                    Update
                                </button></Link>
                                <button onClick={()=>handleDelete(item._id)} className="transition duration-1000 ease-in  cursor-pointer bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyList;
