


const Countries = ({country}) => {

    return (
       
        <div className="card   bg-purple-100 text-black hover:bg-white shadow-lg borde hover:text-black border-blue-100 hover:border-purple-700 hover:transition hover:duration-1000 ease-in  cursor-pointer hover:shadow-2xl">
  
  <figure className="h-full"><img src={country.image} className="transition-transform transform hover:transition hover:duration-1000 ease-in  cursor-pointer hover:scale-110 h-full"  alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-raleway font-bold hover:text-red-700">{country.country_Name}</h2>
    <p className="font-bold font-raleway hover:text-red-700 text-base">{country.description}</p>
   
  </div>
</div>
        
    );
};

export default Countries;