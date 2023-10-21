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
import Edit_Book from "./Pages/Edit_Book";
import Cart from "./Pages/Cart";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        element: <Applayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/admin/addbook",
                element: <AddBook />,
            },
            {
                path: "/admin/listbook",
                element: <Listbook />,
            },

            {
                path: "/admin/addcategory",
                element: <AddCategory />,
            },
            {
                path: "/admin/listcategory",
                element: <ListCategory />,
            },
            {
                path: "/addcategory/:id",
                element: <Edit_category />,
            },
            {
                path: "/editbook/:id",
                element: <Edit_Book />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
        ],
    },
    {
        path: "/register",
        element: <Register />,
    },
]);

export default router;
