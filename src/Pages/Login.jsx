import React from "react";
import InputComponent from "../Components/InputComponent";
import { Link, json, useNavigate } from "react-router-dom";
import ButtonComponent from "../Components/ButtonComponent";
import LinkComponent from "../Components/LinkComponent";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

function Login() {
    const navigate = useNavigate();
    const [inputData, setinputData] = useState({
        email: "",
        password: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setinputData({ ...inputData, [name]: value });
    }

    async function login(e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/auth/login", inputData);

            toast.success("login Successfull");
            console.log(response.data.data.access_token);
            console.log(response.data.data.user);
            localStorage.setItem("access_token", JSON.stringify(response.data.data.access_token));
            localStorage.setItem("user", JSON.stringify(response.data.data.user));

            navigate("/");
        } catch (err) {
            toast.error(err.message);
        }
    }
    return (
        <>
            <div className="container">
                <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ height: "90vh" }}
                >
                    <div className="row w-100 justify-content-center">
                        <div className="col-6 p-5 shadow">
                            <h1 className="text-center">Login</h1>
                            <div className="mb-3">
                                <form onSubmit={login}>
                                    <InputComponent
                                        label="Email"
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        onChange={handleChange}
                                    />

                                    <br />

                                    <InputComponent
                                        label="Password"
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        onChange={handleChange}
                                    />
                                    <br />
                                    <ButtonComponent type="submit" style="primary" name="login" />
                                </form>
                            </div>

                            <LinkComponent
                                style="btn btn-outline-success"
                                type="submit"
                                to="/register"
                                name="Register"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
