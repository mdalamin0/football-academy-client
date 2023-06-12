import { Link } from "react-router-dom";

const Error = () => {
  return (
      <div className=" w-2/3 lg:w-1/3 mx-auto mt-12">
          <img className="" src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000" alt="" />
          <Link to="/"><button className="bg-blue-700 px-5 py-3 hover:bg-blue-800 rounded-md text-semibold text-white mt-12">Back to Home</button></Link>
      </div>
  );
};


export default Error;