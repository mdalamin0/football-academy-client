import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { getAllInstructorAction } from "../../Redux/Actions/Actions";

const Instructors = () => {
  const {isLoading, instructors, error} = useSelector(state => state.instructorReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllInstructorAction());
  },[dispatch]);


  return (
    <div className="mt-8">
       <Helmet>
                <title>Shippo-football-Academy | instructor</title>
            </Helmet>
      <h3 className="text-3xl text-center font-bold">
        Our Available Instructor: {instructors.length}
      </h3>
      {isLoading && <h2 className="text-center text-2xl font-semibold py-16">Loading...</h2>}
      {error && <h2 className="text-center text-red-600 text-2xl font-semibold py-16">{error}</h2>}
      <div className="p-4 md:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {instructors.map((i) => (
          <div key={i._id}>
            <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-t-lg w-full h-60" src={i.photoUrl} alt="" />
              <div className="p-5">
                <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Instructor: {i.name}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Available Seat: {i.available_seat}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Total Student: {i.total_students}
                </p>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-md px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 "
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
