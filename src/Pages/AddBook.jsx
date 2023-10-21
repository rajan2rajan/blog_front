import React, { useEffect } from "react";
import InputComponent from "../Components/InputComponent";
import ButtonComponent from "../Components/ButtonComponent";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { factory } from "../factory/factory";
import { useContext } from "react";
import { UserContext } from "../Context/UserProvider";

function AddBook() {
    const { state: auth, dispatch } = useContext(UserContext);
    // const { auth, dispatch } = useAuthe();

    const data = { name: "", price: "", isbn: "", description: "", category: "", images: "" };
    const [inputData, setinputData] = useState(data);
    function handleChange(e) {
        let { name, value, type } = e.target;
        if (type === "file") {
            value = e.target.files[0];
        }
        setinputData({ ...inputData, [name]: value });
    }

    async function category_list() {
        const factory1 = new factory();
        const response = await factory1.get_list("category", auth);
        setCategory(response);
        // setting default category to first category (if not selected  then value will not be selected)
        setinputData({ ...inputData, category: response[0]._id });
        // try {
        //     const response = await axios.get("http://localhost:8000/category");
        //     setCategory(response.data);
        //     // setting default category to first category (if not selected  then value will not be selected)
        //     setinputData({ ...inputData, category: response.data[0]._id });
        // } catch (error) {
        //     toast.error(error.message);
        // }
    }

    async function add_book(e) {
        e.preventDefault();
        const formdata = new FormData();
        for (let key in inputData) {
            formdata.append(key, inputData[key]);
        }
        const factory1 = new factory();
        await factory1.post_data("book", formdata, auth);
        setinputData({
            ...inputData,
            name: "",
            price: "",
            isbn: "",
            description: "",
            images: "",
        });

        // try {
        //     await axios.post("http://localhost:8000/book", formdata);
        //     // setinputData({
        //     //     ...inputData,
        //     //     name: "",
        //     //     price: "",
        //     //     isbn: "",
        //     //     description: "",
        //     //     images: "",
        //     // });
        //     toast.success("Book Added Successfully");
        // } catch (err) {
        //     toast.error(err.message);
        // }
    }

    const [category, setCategory] = useState([]);

    useEffect(() => {
        category_list();
    }, []);

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 mt-3">
                        <h3 className="text-center">Add Book</h3>
                        <form onSubmit={add_book}>
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

export default AddBook;
