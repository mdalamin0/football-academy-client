import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const [axiosSecure] = useAxiosSecure();
 
  
  const { data: allPayments = [] } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const response = await axiosSecure('/payments');
      return response.data;
    },
  });
  return (
    <div>
      <Helmet>
        <title>Shippo-football-Academy | Payment-History</title>
      </Helmet>
      <div>
      <h2 className="text-center text-3xl font-semibold">
        My Payment History--
      </h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Transaction_Id
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
          {allPayments.map((p) => (
            <tbody key={p._id}>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {p.transactionId}
                </th>
                <td className="px-6 py-4">{p.email}</td>
                <td className="px-6 py-4">{p?.date}</td>
                <td className="px-6 py-4">${p?.price}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
    </div>
  );
};

export default PaymentHistory;