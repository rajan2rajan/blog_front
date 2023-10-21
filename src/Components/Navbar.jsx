import React, { useEffect, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LinkComponent from "./LinkComponent";
import ButtonComponent from "./ButtonComponent";
import { toast } from "react-toastify";
import { UserContext } from "../Context/UserProvider";
import { searchContext } from "../Context/SearchProvider";

function Navbar() {
    var isSearch = false;
    const navigate = useNavigate();
    const { state: auth, dispatch } = useContext(UserContext);
    const { searching } = useContext(searchContext);
    function logout() {
        dispatch({ type: "logout" });
        navigate("/login");
        toast.success("logout sucessfull");
    }

    const [search, setSearch] = useState("");

    useEffect(() => {
        if (!auth.isLoggedIn === null) {
            navigate("/login");
        }
    }, []);

    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <LinkComponent style="navbar-brand" to="/" name="Book seller " />

                    {auth?.user?.name === "admin" ? (
                        <ul className="nav">
                            <li className="nav-item">
                                <LinkComponent style="nav-link" to="/" name="Home" />
                            </li>
                            <li className="nav-item">
                                <LinkComponent
                                    style="nav-link"
                                    to="/admin/addbook"
                                    name="Add Book"
                                />
                            </li>
                            <li className="nav-item">
                                <LinkComponent
                                    style="nav-link"
                                    to="/admin/listbook"
                                    name="List Book"
                                />
                            </li>
                            <li className="nav-item">
                                <LinkComponent
                                    style="nav-link"
                                    to="/admin/addcategory"
                                    name="Add Category"
                                />
                            </li>
                            <li className="nav-item">
                                <LinkComponent
                                    style="nav-link"
                                    to="/admin/listcategory"
                                    name="List Category"
                                />
                            </li>
                            <form
                                className="d-flex"
                                role="search"
                                onSubmit={(e) => {
                                    searching(e, search);
                                    e.target.value = "";
                                    setSearch("");
                                }}
                            >
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    name="search"
                                    id="search"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />

                                <ButtonComponent
                                    style="outline-success"
                                    type="submit"
                                    name="Search"
                                />
                            </form>
                        </ul>
                    ) : (
                        <div>
                            <form
                                className="d-flex"
                                role="search"
                                onSubmit={(e) => {
                                    searching(e, search);
                                    e.target.value = "";
                                    setSearch("");
                                }}
                            >
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    name="search"
                                    id="search"
                                    value={search}
                                    onChange={(e) => {
                                        setSearch(e.target.value);
                                        e.target.value = "";
                                    }}
                                />

                                <ButtonComponent
                                    style="outline-success"
                                    type="submit"
                                    name="Search"
                                />
                            </form>
                            <LinkComponent style="nav-link" to="/cart" name="Cart" />
                        </div>
                    )}

                    {auth?.user?.name ?? "Guest"}
                    <div className="ram">
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
