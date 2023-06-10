import { createBrowserRouter } from "react-router-dom";
import Main from "../Layoutes/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layoutes/Dashboard";
import Instructors from "../Pages/Instructors/Instructors";
import Users from "../Pages/Dashboard/Users/Users";
import AdminRoute from "./AdminRoute";
import AddClass from "../Pages/AddClass/AddClass";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import UpdateClass from "../Pages/Dashboard/UpdateClass/UpdateClass";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";

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
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "users",
        element: (
          <AdminRoute>
            {" "}
            <Users></Users>
          </AdminRoute>
        ),
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
    ],
  },
]);

export default router;
