import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Instructor from "../pages/InstructorPage/Instructor";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import MySelectedClass from "../pages/MyselectedClass/MySelectedClass";
import PrivetRoute from "./PrivetRoute";

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
    }
])

export default router;