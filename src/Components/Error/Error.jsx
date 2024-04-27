import { Link } from "react-router-dom";
import error from '../../assets/error-1.jpg'

const Error = () => {
    return (
   <div className="mx-auto" style={{ backgroundImage: `url(${error})`, backgroundSize: 'cover',  height:'100vh' }}>
<div className='text-center items-center justify-center '>
      <h1 className=' mt-5 text-black text-5xl lg:text-5xl font-bold'>Oops!</h1>
      <p className='mt-12 text-black text-4xl  font-bold'>Sorry, an unexpected error has occurred.</p>
      <Link className="mx-auto " to={'/'}>
            <div className="mx-auto mt-10 ">
            <h2 className="text-center hover:bg-red-900 border-none px-7 btn bg-red-500 text-white font-raleway  text-2xl">Back to home page</h2>
    </div>
    </Link>
    </div>
   </div>
    );
};

export default Error;