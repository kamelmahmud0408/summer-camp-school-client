import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Instructor from "../pages/InstructorPage/Instructor";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivetRoute from "./PrivetRoute";
import Dashboard from "../layout/Dashboard";
import MySelectedClass from "../pages/Dashboard/MySelectedClass/MySelectedClass";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/instructor',
                element: <Instructor></Instructor>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            },
            {
                path:'/selectedclass',
                element: <PrivetRoute><MySelectedClass></MySelectedClass></PrivetRoute>
            }
        ]
    },
    {
        path:'dashboard',
        element: <Dashboard></Dashboard>,
        children:[
            {
                path:'myselectedclass',
                element: <MySelectedClass></MySelectedClass>
            }
        ]
    }
])

export default router;