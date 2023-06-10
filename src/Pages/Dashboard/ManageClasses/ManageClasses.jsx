import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const ManageClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/allClasses')
    .then(res => res.json())
    .then(data => setClasses(data))
  },[])

  // const {
  //   data: classes = [],
  //   refetch,
  //   isLoading,
  // } = useQuery({
  //   queryKey: ["classes"],
  //   queryFn: async () => {
  //     const response = await fetch(`http://localhost:5000/allClasses`);
  //     return response.json();
  //   },
  // });

  

  const handleUpdateStatus = (id, newStatus) => {
    // Make an API call to update the status
    fetch(`http://localhost:5000/classes/updateStatus/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((response) => {
        if (response.ok) {
          // Update the status of the selected item locally
          const updatedData = classes.map((item) => {
            if (item._id === id) {
              return { ...item, status: newStatus };
            }
            return item;
          });
          setClasses(updatedData);
          alert('Status updated successfully.');
        } else {
          alert('Failed to update the status.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to update the status.');
      });
  };
  const handleUpdateStatusTwo = (id, newStatus) => {
    // Make an API call to update the status
    fetch(`http://localhost:5000/classes/updateStatus/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((response) => {
        if (response.ok) {
          // Update the status of the selected item locally
          const updatedData = classes.map((item) => {
            if (item._id === id) {
              return { ...item, status: newStatus };
            }
            return item;
          });
          setClasses(updatedData);
          alert('Status updated successfully.');
        } else {
          alert('Failed to update the status.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to update the status.');
      });
  };
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
                Instructor Name
              </th>
              <th scope="col" className="px-6 py-3">
                Instructor Email
              </th>
              <th scope="col" className="px-6 py-3">
               Enrolled Students
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
                    <div className="text-base font-semibold">{c.class_name}</div>
                    <div className="font-normal text-gray-500">
                    Available seats: {c.available_seats}
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">
                  {c.instructor_name}
                </td>
                <td className="px-6 py-4">
                  {c.instructorEmail ?
                  <><span>{c.instructorEmail}</span></> :
                  <>Not Available</>
                  }
                </td>
                <td className="px-6 py-4">{c?.total_enrole}</td>
                <td className="px-6 py-4">
                  <button onClick={() => handleUpdateStatus(c._id)}  className="font-medium text-blue-600 dark:text-blue-500 ">
                  <div className="flex items-center">{c?.status === 'pending' ? <><span className="text-green-500">Approve?</span></> : 'Approved !'
                  }</div>
                  </button>
                </td>
                <td className="px-6 py-4">
                      <>
                        <button onClick={() => handleUpdateStatusTwo(c._id)}  className="font-medium text-red-600">
                  <div className="flex items-center">{c?.status === 'pending' ? <><span className="text-purple-500">Deny?</span></> : 'denied'
                  }</div>
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

export default ManageClasses;
