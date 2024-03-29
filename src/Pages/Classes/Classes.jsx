import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllClassesAction } from "../../Redux/Actions/Actions";

const Classes = () => {
  const {isLoading, classes, error} = useSelector(state => state.classesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllClassesAction());
  },[dispatch]);
console.log(classes)
  const { user, loading } = useAuth();


  const handleSelectClass = (singleClass) => {
    
    if (loading) {
      return <div>Loading....</div>;
    }
    const selectClass = {
      email: user?.email,
      class_name: singleClass.class_name,
      instructor_name: singleClass.instructor_name,
      price: singleClass.price,
      image: singleClass.image,
      available_seats: singleClass.available_seats,
    };

    fetch(
      "https://shippo-football-academy-server-mdalamin0.vercel.app/booking",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectClass),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully Selected",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const navigate = useNavigate();
  const handleSelect = () => {
    if (!user) {
      Swal.fire({
        title: "You have to log in first to select class",
        showCancelButton: true,
        confirmButtonText: "Ok",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          navigate('/login');
        }
      });
    }
  };

  return (
    <>
    <div className="mt-8">
      <h3 className="text-3xl text-center font-bold">
        Our Available Class: {classes.length}
      </h3>
      {isLoading && <h2 className="text-center text-2xl font-semibold py-16">Loading...</h2>}
      {error && <h2 className="text-center text-red-600 text-2xl font-semibold py-16">{error}</h2>}
      <div className="p-4 md:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {classes.map((c) => (
          <div key={c._id}>
            <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-t-lg w-full h-60" src={c.image} alt="" />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Class: {c.class_name}
                </h5>
                <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Instructor: {c.instructor_name}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Available Seat: {c.available_seats}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Price: ${c.price}
                </p>
                {user ? (
                     <button
                     onClick={() => handleSelectClass(c)}
                     type="button"
                     className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-md px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 "
                   >
                     Select
                   </button>
                    ) : (
                      
                        <button onClick={handleSelect} className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-md px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 "> Select</button>
                      
                    )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Classes;
