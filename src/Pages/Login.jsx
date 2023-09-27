import React from "react";
import InputComponent from "../Components/InputComponent";
import { Link } from "react-router-dom";
import ButtonComponent from "../Components/ButtonComponent";
import LinkComponent from "../Components/LinkComponent";

function Login() {
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
                                <InputComponent
                                    label="Email"
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                />

                                <br />

                                <InputComponent
                                    label="Password"
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Enter your password"
                                />
                            </div>

                            <ButtonComponent type="submit" style="primary" name="login" />
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
