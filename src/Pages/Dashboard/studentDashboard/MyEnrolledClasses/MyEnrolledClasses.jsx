import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MyEnrolledClasses = () => {
  const [axiosSecure] = useAxiosSecure();
 
  
  const { data: allEnrolledClass = [] } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const response = await axiosSecure('/payments');
      return response.data;
    },
  });
  return (
    <div>
       <div>
      <Helmet>
        <title>Shippo-football-Academy | My Enrolled Class</title>
      </Helmet>
      <div>
      <h2 className="text-center text-3xl font-semibold">
        My All Enrolled Class--
      </h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Enrolled Class
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Payment Money
              </th>
            </tr>
          </thead>
          {allEnrolledClass.map((e) => (
            <tbody key={e._id}>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src={e.image}
                    alt="Jese image"
                  />
                  <div className="pl-3">
                    <div className="text-base font-semibold">
                      {e.class_name}
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">{e.email}</td>
                <td className="px-6 py-4">{e?.date}</td>
                <td className="px-6 py-4">${e?.price}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
    </div>
    </div>
  );
};

export default MyEnrolledClasses;