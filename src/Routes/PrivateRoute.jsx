import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Spinner } from "flowbite-react";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
        return <Spinner className="text-center w-full mt-20" aria-label="Default status example" />
    }
    
    if(user){
        return children
    }
    return <Navigate state={{from: location}} replace={true} to="/login"></Navigate>
};

export default PrivateRoute;