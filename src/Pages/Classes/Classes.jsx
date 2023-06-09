import { useLoaderData } from "react-router-dom";

const Classes = () => {
  const allClasses = useLoaderData();

  return (
    <div className="mt-8">
      <h3 className="text-3xl text-center font-bold">Our Available Class: {allClasses.length}</h3>
      <div className="p-4 md:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {
                    allClasses.map(c => <div key={c._id}>

                        <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <img className="rounded-t-lg w-full h-60" src={c.image} alt="" />
                            <div className="p-5">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Class: {c.class_name}</h5>
                                    <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Instructor: {c.instructor_name}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Available Seat: {c.available_seats}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Price: ${c.price}</p>
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-md px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">Select</button>
                            </div>
                        </div>

                    </div>)
                }
            </div>
    </div>
  );
};

export default Classes;