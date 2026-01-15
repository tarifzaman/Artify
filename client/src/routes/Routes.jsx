import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home /> }
        ]
    },
    {
        path: "*",
        element: <div className="h-screen flex justify-center items-center text-4xl font-bold">404 - Art Not Found!</div>
    }
]);