import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LinkComponent from "./LinkComponent";
import ButtonComponent from "./ButtonComponent";
import { toast } from "react-toastify";

function Navbar() {
    const navigate = useNavigate();
    function logout() {
        localStorage.removeItem("access_token");
        localStorage.removeItem("user");
        navigate("/login");
        toast.success("logout sucessfull");
    }

    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <LinkComponent style="navbar-brand" to="/" name="Book seller" />
                    {JSON.parse(localStorage.getItem("user"))?.name}

                    <ul className="nav">
                        <li className="nav-item">
                            <LinkComponent style="nav-link" to="/" name="Home" />
                        </li>
                        <li className="nav-item">
                            <LinkComponent style="nav-link" to="/addbook" name="Add Book" />
                        </li>
                        <li className="nav-item">
                            <LinkComponent style="nav-link" to="/listbook" name="List Book" />
                        </li>
                        <li className="nav-item">
                            <LinkComponent style="nav-link" to="/addcategory" name="Add Category" />
                        </li>
                        <li className="nav-item">
                            <LinkComponent
                                style="nav-link"
                                to="/listcategory"
                                name="List Category"
                            />
                        </li>
                    </ul>

                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            name="search"
                            id="search"
                            onChange={(e) => {
                                e.target.value;
                            }}
                        />

                        <ButtonComponent
                            style="outline-success"
                            onClick="opertions"
                            name="Search"
                        />
                    </form>
                    <div>
                        <LinkComponent style="btn btn-outline-success" to="/login" name="Login" />

                        <ButtonComponent
                            label="logout"
                            operation={logout}
                            style="danger"
                            name="logout"
                        />
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
