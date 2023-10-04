import React, { useEffect } from "react";
import InputComponent from "../Components/InputComponent";
import ButtonComponent from "../Components/ButtonComponent";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

function EditBook() {
    const { id } = useParams();
    const initialState = {
        name: "",
        price: "",
        isbn: "",
        description: "",
        category: "",
        images: "",
    };
    const [inputData, setinputData] = useState(initialState);
    function handleChange(e) {
        let { name, value, type } = e.target;
        if (type === "file") {
            value = e.target.files[0];
        }
        setinputData({ ...inputData, [name]: value });
    }

    async function category_list() {
        try {
            const response = await axios.get("http://localhost:8000/category");
            setCategory(response.data);
        } catch (error) {
            toast.error(error.message);
        }
    }

    async function edit_book(e) {
        e.preventDefault();
        const formdata = new FormData();
        for (let key in inputData) {
            formdata.append(key, inputData[key]);
        }

        try {
            await axios.put(`http://localhost:8000/book/${id}`, formdata);
            setinputData({
                ...inputData,
                name: "",
                price: "",
                isbn: "",
                description: "",
                images: "",
            });

            toast.success("Book updated Successfully");
        } catch (err) {
            toast.error(err.message);
        }
    }

    async function get_book() {
        try {
            let response = await axios.get(`http://localhost:8000/book/${id}`);
            console.log(response.data);
            setinputData({
                name: response.data.name,
                price: response.data.price,
                isbn: response.data.isbn,
                description: response.data.description,
                category: response.data.category._id,
                images: response.data.images,
            });
        } catch (error) {
            toast.error(error.message);
        }
    }

    const [category, setCategory] = useState([]);

    useEffect(() => {
        get_book();
        category_list();
    }, []);

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 mt-3">
                        <h3 className="text-center">Add Book</h3>
                        <form onSubmit={edit_book}>
                            <div className="mb-3">
                                <InputComponent
                                    label="Name"
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={inputData.name}
                                    placeholder="Enter your name"
                                    onChange={handleChange}
                                />
                                <br />

                                <InputComponent
                                    label="Price"
                                    id="price"
                                    name="price"
                                    type="number"
                                    value={inputData.price}
                                    placeholder="Enter your price"
                                    onChange={handleChange}
                                />
                                <br />
                                <InputComponent
                                    label="isbn"
                                    id="isbn"
                                    name="isbn"
                                    type="number"
                                    value={inputData.isbn}
                                    placeholder="Enter your isbn"
                                    onChange={handleChange}
                                />
                                <br />

                                <InputComponent
                                    label="Description"
                                    id="description"
                                    name="description"
                                    type="text"
                                    value={inputData.description}
                                    placeholder="Enter your description"
                                    onChange={handleChange}
                                />
                                <br />
                                <label for="Status" className="form-label">
                                    Category
                                </label>
                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    id="category"
                                    name="category"
                                    value={inputData.category}
                                    onChange={handleChange}
                                >
                                    {category.map((item) => (
                                        <option value={item._id} key={item._id}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                                <br />
                                <InputComponent
                                    label="Image"
                                    id="image"
                                    name="images"
                                    type="file"
                                    placeholder="Enter your image"
                                    onChange={handleChange}
                                />
                                <br />

                                <br />
                                <ButtonComponent
                                    label="Add Book"
                                    type="submit"
                                    style="primary"
                                    name="Add"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditBook;
