import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useInstructor = () => {
  const { user } = useContext(AuthContext);
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/users/admin/${user?.email}`
      );
      return res.json();
    },
  });
  return [isInstructor, isInstructorLoading];
};

export default useInstructor;
