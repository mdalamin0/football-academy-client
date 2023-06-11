import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Users = () => {
  const [axiosSecure] = useAxiosSecure();
  const {data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async() => {
        const response = await axiosSecure.get('/users')
        return response.data;
    },
  });

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
            refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is Admin Now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleMakeInstructor = (user) => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
            refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is Instructor Now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                User name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <>
                <tr
                  key={user._id}
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {user.name}
                  </th>
                  <td className="px-6 py-4">{user.email}</td>
                  {user.role === "instructor" ? (
                      <td className="px-6 py-4">
                      <span className="font-medium text-green-600 dark:text-blue-500">Already Instructor</span>
                  </td>
                  ) : (
                    <td className="px-6 py-4">
                      <button onClick={() => handleMakeInstructor(user)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        Make Instructor
                      </button>
                    </td>
                  )}

                  {user.role === "admin" ? (
                <td className="px-6 py-4">
                    <span className="font-medium text-green-600 dark:text-blue-500">Already Admin</span>
                </td>
                  ) : (
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Make Admin
                      </button>
                    </td>
                  )}
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
