import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

function Applayout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default Applayout;
