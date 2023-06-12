import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useInstructor = () => {
  const { user } = useAuth();
  const token = localStorage.getItem("access-token");

  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://shippo-football-academy-server-mdalamin0.vercel.app/users/instructor/${user?.email}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });
  return [isInstructor, isInstructorLoading];
};

export default useInstructor;
