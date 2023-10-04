import React, { useEffect } from "react";
import InputComponent from "../Components/InputComponent";
import ButtonComponent from "../Components/ButtonComponent";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Edit_category() {
    const navigate = useNavigate();
    const { id } = useParams();
    async function handleSubmit(e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const status = document.getElementById("status").value;
        try {
            await axios.put(`http://localhost:8000/category/${id}`, { name, status });
            toast.success("Category updated successfully");
            navigate("/listcategory");
        } catch (err) {
            alert(err.message);
        }
    }

    useEffect(() => {
        getDataById();
    }, []);

    const [passname, setPassname] = useState();
    const [passstatus, setPassstatus] = useState();

    async function getDataById() {
        try {
            let response = await axios.get(`http://localhost:8000/category/${id}`);
            setPassname(response.data.name);
            setPassstatus(response.data.status);
            console.log(response.data);
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 mt-3">
                        <h3 className="text-center">Edit category</h3>
                        <div className="mb-3">
                            <form onSubmit={handleSubmit}>
                                <InputComponent
                                    label="Name"
                                    id="name"
                                    value={passname}
                                    name="name"
                                    onChange={(e) => setPassname(e.target.value)}
                                    type="text"
                                    placeholder="Enter your category name"
                                />
                                <br />
                                <label for="Status" className="form-label">
                                    Status
                                </label>
                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    id="status"
                                    name="status"
                                    value={passstatus}
                                    onChange={(e) => setPassstatus(e.target.value)}
                                >
                                    <option value="active">active</option>
                                    <option value="inactive">inactive</option>
                                </select>
                                <br />

                                <ButtonComponent
                                    label="update Book"
                                    type="submit"
                                    style="primary"
                                    name="change"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Edit_category;
