import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useAdmin = () => {
  const { user } = useAuth();
  const token = localStorage.getItem("access-token");
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://shippo-football-academy-server-mdalamin0.vercel.app/users/admin/${user?.email}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
