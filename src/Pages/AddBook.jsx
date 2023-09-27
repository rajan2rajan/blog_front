import React from "react";
import Navbar from "../Components/Navbar";
import InputComponent from "../Components/InputComponent";
import ButtonComponent from "../Components/ButtonComponent";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

function AddBook() {
    async function add_book() {
        try {
            let response = await axios.post("http://localhost:8000/book");
            setBook(response.data);
        } catch (err) {
            toast.error(err.message);
        }
    }

    async function category_list() {
        try {
            let response = await axios.get("http://localhost:8000/category");
            setCategory(response.data.name);
        } catch (err) {
            toast.error(err.message);
        }
    }

    // const [book, setBook] = useState([]);
    // const [category, setCategory] = useState([]);

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 mt-3">
                        <h3 className="text-center">Add Book</h3>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">
                                name
                            </label>
                            <InputComponent
                                label="Name"
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                            />
                            <br />

                            <InputComponent
                                label="Price"
                                id="price"
                                name="price"
                                type="number"
                                placeholder="Enter your price"
                            />
                            <br />
                            <InputComponent
                                label="isbn"
                                id="isbn"
                                name="isbn"
                                type="number"
                                placeholder="Enter your isbn"
                            />
                            <br />

                            <InputComponent
                                label="Description"
                                id="description"
                                name="description"
                                type="text"
                                placeholder="Enter your description"
                            />

                            <label for="Status" className="form-label">
                                Category
                            </label>
                            <select
                                class="form-select"
                                aria-label="Default select example"
                                id="category"
                                name="category"
                                value={passstatus}
                                onChange={(e) => setPassstatus(e.target.value)}
                            >
                                <option value="active">active</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">
                                Image
                            </label>
                            <input
                                type="file"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="name@example.com"
                            />
                        </div>

                        <ButtonComponent
                            label="Add Book"
                            type="submit"
                            style="primary"
                            name="Add"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddBook;
