import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import AddBook from "./Pages/AddBook";
import Listbook from "./Pages/Listbook";
import Login from "./Pages/Login";
import Applayout from "./Pages/Applayout";
import Register from "./Pages/Register";
import AddCategory from "./Pages/AddCategory";
import ListCategory from "./Pages/ListCategory";
import Edit_category from "./Pages/Edit_category";

const router = createBrowserRouter([
    {
        element: <Applayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/addbook",
                element: <AddBook />,
            },
            {
                path: "/listbook",
                element: <Listbook />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/addcategory",
                element: <AddCategory />,
            },
            {
                path: "/listcategory",
                element: <ListCategory />,
            },
            {
                path: "/addcategory/:id",
                element: <Edit_category />,
            },
        ],
    },
    {
        path: "/register",
        element: <Register />,
    },
]);

export default router;