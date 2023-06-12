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
import AddClass from "../pages/Dashboard/InstructorPage/AddClass";
import MyClasses from "../pages/Dashboard/InstructorPage/MyClasses";
import InstructorRoute from "./InstructorRoute";
import UpdateClass from "../pages/Dashboard/InstructorPage/UpdateClass";
import Payment from "../pages/Dashboard/Payment/Payment";
import MyEnrooledClass from "../pages/Dashboard/MyEnrolledClass/MyEnrooledClass";
import ClassesPage from "../pages/ClassesPage/ClassesPage";

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
                path:'/classes',
                element: <ClassesPage></ClassesPage>
            }
            ,
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
                path:'myenrolledclass',
                element:<MyEnrooledClass></MyEnrooledClass>
                
            }
            ,
            {
                path:'/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader:({params})=>fetch(`http://localhost:5000/selectedById/${params.id}`)
            },
            {
                path:'manageuser',
                element: <ManageUser></ManageUser>
            },
            {
                path:'manageclass',
                element: <AdminRoute><ManageClass></ManageClass></AdminRoute>
            },
            {
                path:'addclass',
                element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
            },
            {
                path:'myclasses',
                element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
            },
            {
                path:'/dashboard/updateclass/:id',
                element: <UpdateClass></UpdateClass>,
                loader:({params})=>fetch(`http://localhost:5000/class/${params.id}`)
                
            }
        ]
    }
])

export default router;