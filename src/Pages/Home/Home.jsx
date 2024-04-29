import Banner from "./Banner";
import Clients from "./Clients";
import Explore from "./Explore";


const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            <Explore></Explore>
           <Clients></Clients>
          

        </div>
    );
};

export default Home;