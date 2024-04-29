import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "../../Pages/Home/Footer";


const Root = () => {
    return (
        <div >
       <Header></Header>
       <Outlet></Outlet> 
    <Footer></Footer>
        </div>
    );
};

export default Root;