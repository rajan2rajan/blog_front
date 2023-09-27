import React from "react";
import { Link } from "react-router-dom";
import LinkComponent from "./LinkComponent";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";

function Navbar() {
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <LinkComponent style="navbar-brand" to="/" name="Book seller" />

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
                        <button className="btn btn-outline-danger" type="submit">
                            Logout
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
