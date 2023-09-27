import React from "react";
import { Link } from "react-router-dom";
import InputComponent from "../Components/InputComponent";
import ButtonComponent from "../Components/ButtonComponent";
import LinkComponent from "../Components/LinkComponent";

function Register() {
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
                                <InputComponent
                                    label="Email"
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                />

                                <br />

                                <InputComponent
                                    label="Password"
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password"
                                />

                                <br />

                                <InputComponent
                                    label="Confirm Password"
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder="Enter your password"
                                />

                                <br />

                                <InputComponent
                                    label="Name"
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Enter your name"
                                />

                                <br />

                                <InputComponent
                                    label="Phone"
                                    id="phone"
                                    name="phone"
                                    type="number"
                                    placeholder="Enter your phone"
                                />
                            </div>

                            <ButtonComponent type="submit" style="primary" name="Register" />

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
        </>
    );
}

export default Register;
