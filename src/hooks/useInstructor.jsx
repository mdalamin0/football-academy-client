import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useInstructor = () => {
  const { user } = useAuth();
  const token = localStorage.getItem('access-token')
 
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users/instructor/${user?.email}`, {
        headers: {
            authorization: `bearer ${token}`
        }
    }
      );
      return res.json();
    },
  });
  return [isInstructor, isInstructorLoading];
};

export default useInstructor;
