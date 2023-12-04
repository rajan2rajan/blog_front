import React from "react";
import { Link, useNavigate } from "react-router-dom";
import InputComponent from "../Components/InputComponent";
import ButtonComponent from "../Components/ButtonComponent";
import LinkComponent from "../Components/LinkComponent";
import { toast } from "react-toastify";
import { factory } from "../factory/factory";
import axios from "axios";
import { useState } from "react";

function Register() {
    const navigate = useNavigate();
    const [inputData, setinputData] = useState({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
        phone_number: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setinputData({ ...inputData, [name]: value });
    }

    async function register(e) {
        e.preventDefault();
        // const factory1 = new factory();
        // await factory1.post_data("auth/register", inputData);
        try {
            await axios.post("http://localhost:8000/auth/register", inputData);
            toast.success("Registered Successfully");
            navigate("/login");
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
                            <h1 className="text-center">Register</h1>
                            <div className="mb-3">
                                <form onSubmit={register}>
                                    <InputComponent
                                        label="Name"
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Enter your name"
                                        onChange={handleChange}
                                    />

                                    <br />
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

                                    <InputComponent
                                        label="Confirm Password"
                                        type="password"
                                        id="confirm_password"
                                        name="confirm_password"
                                        placeholder="Enter your password"
                                        onChange={handleChange}
                                    />
                                    <br />
                                    <InputComponent
                                        label="phone_number"
                                        type="phone_number"
                                        id="phone_number"
                                        name="phone_number"
                                        placeholder="Enter your phone_number"
                                        onChange={handleChange}
                                    />

                                    <br />

                                    <ButtonComponent
                                        type="submit"
                                        style="primary"
                                        name="Register"
                                    />
                                </form>

                                <LinkComponent
                                    style="btn btn-outline-success"
                                    type="submit"
                                    to="/login"
                                    name="Login"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
