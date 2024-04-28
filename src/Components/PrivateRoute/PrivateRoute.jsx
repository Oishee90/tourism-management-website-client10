import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../hook/UseAuth";
import PropTypes from 'prop-types';



const PrivateRoute = ({children}) => {
    const {user, loading} = UseAuth();
    const location = useLocation();
    console.log(location)
    if(loading){
        return <div className="w-1/2"><span className="loading loading-spinner text-info"></span></div>
    }
   
    if(user){
        return children
    }
   
    return (
        <Navigate state={location.pathname} to="/login"></Navigate>
    );
};


export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.element.isRequired
  };