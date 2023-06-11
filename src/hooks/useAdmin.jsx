import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const  useAdmin = () => {
    const {user } = useContext(AuthContext);
   
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        // enabled : !!user?.email,
        queryFn: async() => {
            const 
            res = await fetch(`http://localhost:5000/users/admin/${user?.email}`);
            const abc = res.json()
            return abc
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;