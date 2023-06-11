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
import ManageUser from "../pages/Dashboard/AdminPage/ManageUser";
import AdminRoute from "./AdminRoute";
import ManageClass from "../pages/Dashboard/AdminPage/ManageClass";

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
        element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
        children:[
            {
                path:'myselectedclass',
                element: <MySelectedClass></MySelectedClass>
            },
            {
                path:'manageuser',
                element: <ManageUser></ManageUser>
            },
            {
                path:'manageclass',
                element: <AdminRoute><ManageClass></ManageClass></AdminRoute>
            }
        ]
    }
])

export default router;