import React from "react";
import Navbar from "./Components/Navbar";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <>
            <RouterProvider router={router} />
            <ToastContainer />
        </>
    );
}

export default App;
