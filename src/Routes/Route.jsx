import { createBrowserRouter } from "react-router-dom";
import Main from "../Layoutes/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layoutes/Dashboard";
import Instructors from "../Pages/Instructors/Instructors";
import Users from "../Pages/Dashboard/Users/Users";
import AddClass from "../Pages/AddClass/AddClass";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import UpdateClass from "../Pages/Dashboard/UpdateClass/UpdateClass";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import MyEnrolledClasses from "../Pages/Dashboard/studentDashboard/MyEnrolledClasses/MyEnrolledClasses";
import MySelectedClasses from "../Pages/Dashboard/studentDashboard/MySelectedClasses/MySelectedClasses";
import Payment from "../Pages/Dashboard/studentDashboard/Payment/Payment";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
        loader: () => fetch("http://localhost:5000/allClasses"),
      },
      {
        path: "instructors",
        element: <Instructors></Instructors>,
        loader: () => fetch("http://localhost:5000/allInstructors"),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "users",
        element: <AdminRoute></AdminRoute>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "addClass",
        element: <AddClass></AddClass>,
      },
      {
        path: "myClasses",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "updateClasses/:id",
        element: <UpdateClass></UpdateClass>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/classesById/${params.id}`),
      },
      {
        path: "manageClasses",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "enrolledClasses",
        element: <MyEnrolledClasses></MyEnrolledClasses>,
      },
      {
        path: "selectedClasses",
        element: <MySelectedClasses></MySelectedClasses>,
      },
    ],
  },
]);

export default router;
