import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const ManageClasses = () => {
  const {
    data: classes = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const response = await fetch(`http://localhost:5000/allClasses`);
      return response.json();
    },
  });
  console.log(classes)
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Total Enrolled Students
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          {classes.map((c) => (
            <tbody key={c._id}>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src={c.image}
                    alt="Jese image"
                  />
                  <div className="pl-3">
                    <div className="text-base font-semibold">Neil Sims</div>
                    <div className="font-normal text-gray-500">
                      neil.sims@flowbite.com
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">{c?.total_enrole}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">{c?.status}</div>
                </td>
                <td className="px-6 py-4">
                  <Link
                    to={`/dashboard/updateClasses/${c._id}`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit Class
                  </Link>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
