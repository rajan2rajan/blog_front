import React from "react";
import UserProvider from "./Context/UserProvider";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ToastContainer } from "react-toastify";
import SearchProvider from "./Context/SearchProvider";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
    return (
        <>
            <UserProvider>
                <SearchProvider>
                    <RouterProvider router={router} />
                    <ToastContainer />
                </SearchProvider>
            </UserProvider>
        </>
    );
}

export default App;
