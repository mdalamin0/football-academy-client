import Drawer from "react-modern-drawer";
import { FaHome } from "react-icons/fa";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import React from "react";

const Dashboard = () => {
  // const {loading} = useContext(AuthContext);
  // const [isAdmin] = useAdmin();
  // const [isInstructor] = useInstructor();
  // console.log(isAdmin, isInstructor)
  const isAdmin = false;
  const isInstructor = false;

  // if(loading){
  //   return <div>Loading...</div>
  // }

  const [isOpen, setIsOpen] = React.useState(true);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="mt-12 text-center">
      <>
       <div className="w-full text-right">
       <button
          className="text-white  bg-blue-700 hover:bg-blue-800  font-medium rounded-md px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700"
          onClick={toggleDrawer}
        >
          Show Menu
        </button>
       </div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="left"
          className="px-5"
        >
          {isAdmin ?
           <><div className="py-4 overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                    <li>
                       <Link
                           to="/dashboard/manageClasses"
                           className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                         >
                           <img
                             className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                             src="https://pic.onlinewebfonts.com/svg/img_350696.png"
                             alt=""
                           />
                           <span className="ml-3">Manage Classes</span>
                         </Link>
                       </li>
                       <li></li>
                       <li>
                         <Link
                           to="/dashboard/users"
                           className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                         >
                           <svg
                             aria-hidden="true"
                             className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                             fill="currentColor"
                             viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg"
                           >
                             <path
                               fillRule="evenodd"
                               d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                               clipRule="evenodd"
                             ></path>
                           </svg>
                           <span className=" ml-3 whitespace-nowrap">Users</span>
                         </Link>
                       </li>
                     </ul>
                   </div></>
            : isInstructor ? 
            <> 
            <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
             <li>
              <Link
                to="/dashboard/myClasses"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <img
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  src="https://pic.onlinewebfonts.com/svg/img_350696.png"
                  alt=""
                />
                <span className="ml-3">My Classes</span>
              </Link>
            </li>
            <li></li>
            <li>
              <Link
                to="/dashboard/addClass"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className=" ml-3 whitespace-nowrap">Add Class</span>
              </Link>
            </li>
          </ul>
        </div>
             </> : 
            <>
            <div>
            <ul className="space-y-2 font-medium">
           <li>
              <Link
                to="/dashboard/enrolledClasses"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <img
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  src="https://pic.onlinewebfonts.com/svg/img_350696.png"
                  alt=""
                />
                <span className="ml-3">My Enrolled Classes</span>
              </Link>
            </li>
            <li></li>
            <li>
              <Link
                to="/dashboard/selectedClasses"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className=" ml-3 whitespace-nowrap">My Selected Classes</span>
              </Link>
            </li>
          </ul>
            </div>
            </>
            }
              <div>
             <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-px my-8 bg-gray-400 border-0 dark:bg-gray-700" />
        </div>
        <ul className="space-y-2 font-medium">
           <li>
          <Link
              to="/"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <FaHome></FaHome>
              <span className=" ml-3 whitespace-nowrap">Home</span>
            </Link>
          </li>
        </ul>
      </div>
        </Drawer>
      </>
    <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
