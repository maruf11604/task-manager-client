import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Addtask from "../../Pages/Home/Addtask/Addtask";
import Completetask from "../../Pages/Home/Completetask/Completetask";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Home/Login/Login";
import Signup from "../../Pages/Home/Login/Signup/Signup";
import Mytask from "../../Pages/Home/Mytask/Mytask";
import TaskDetails from "../../Pages/Home/Mytask/TaskDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/addtask',
                element: <PrivateRoute><Addtask></Addtask></PrivateRoute>
            },
            {
                path: '/mytask',
                element: <PrivateRoute> <Mytask></Mytask></PrivateRoute>
            },
            {
                path: '/completetask',
                element: <PrivateRoute><Completetask></Completetask></PrivateRoute>
            },
            {
                path: '/addtask/:id',
                element: <TaskDetails></TaskDetails>,
                loader: ({ params }) => {
                    fetch(`http://localhost:5000/addtask/${params._id}`)
                }
            }
        ]
    }
])