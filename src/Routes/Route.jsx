import { createBrowserRouter } from "react-router-dom";
import Main from "../Layoutes/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layoutes/Dashboard";
import Instructors from "../Pages/Instructors/Instructors";
import Users from "../Pages/Dashboard/Users/Users";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'classes',
                element: <Classes></Classes>,
                loader: () => fetch('http://localhost:5000/allClasses')

            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>,
                loader: () => fetch('http://localhost:5000/allInstructors')

            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'users',
                element: <Users></Users>
            }
        ]
    }
]);

export default router;