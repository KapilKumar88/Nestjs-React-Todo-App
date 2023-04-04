import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashboard/dashboard";
import ErrorPage from "../pages/error/error-page";
import Login from "../pages/login/login";
import Register from "../pages/register/register";

const routes = [
    {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/register",
        element: <Register />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        errorElement: <ErrorPage />,
    },
];


const router = createBrowserRouter(routes);
export default router;