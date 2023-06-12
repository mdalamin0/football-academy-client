import { Navigate, useLocation } from "react-router";
import useAdmin from "../hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Spinner } from "flowbite-react";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <Spinner className="text-center w-full" aria-label="Default status example" />
    )
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate  state={{ from: location }} replace={true} to="/"></Navigate>;
};

export default AdminRoute;
