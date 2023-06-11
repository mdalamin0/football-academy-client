import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const MySelectedClasses = () => {
   const {
    data: allClasses = [],
    refetch,
  } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const response = await fetch('http://localhost:5000/booking');
      return response.json();
    },
  });

  const handleDeleteClass = (id) => {
    fetch(`http://localhost:5000/bookingById/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      if(data.deletedCount > 0){
        refetch()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Successfully Delete',
            showConfirmButton: false,
            timer: 1500
        })
      }
    })
  }
  return (
    <div>
      <h2 className="text-center text-3xl font-semibold">My All Selected Class--</h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Instructor Name
              </th>
              <th scope="col" className="px-6 py-3">
               Price
              </th>
              <th scope="col" className="px-6 py-3">
                Payment
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          {allClasses.map((c) => (
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
                    <div className="text-base font-semibold">{c.class_name}</div>
                    <div className="font-normal text-gray-500">
                    Available seats: {c.available_seats}
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">
                  {c.instructor_name}
                </td>
                <td className="px-6 py-4">${c?.price}</td>
                <td className="px-6 py-4">
                  <button className="font-medium bg-blue-600 text-white py-1 px-4 rounded-md">
                  Pay 
                  </button>
                </td>
                <td className="px-6 py-4">
                      <>
                        <button onClick={() => handleDeleteClass(c._id)}  className="font-medium text-red-600">
                 Delete
                  </button>
                      </>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MySelectedClasses;