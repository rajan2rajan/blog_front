import React, { useEffect } from "react";
import ButtonComponent from "../Components/ButtonComponent";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

function Listbook() {
    async function book_list() {
        try {
            const response = await axios.get("http://localhost:8000/book");
            setBook(response.data);
        } catch (err) {
            toast.error(err.message);
        }
    }

    useEffect(() => {
        book_list();
    }, []);

    const [book, setBook] = useState([]);
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 mt-3">
                        <h3 className="text-center">Book List</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">S.N</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">categoory</th>
                                    <th scope="col">ISBN</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {book.map((item, index) => (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            {`http://localhost:8000${item.images}`}
                                            {/* <img
                                                src={`http://localhost:8000/${item.image}`}
                                                // width="50px"
                                                // height="50px"
                                            /> */}
                                        </td>
                                        <td>{item.category.name}</td>

                                        <td>{item.isbn}</td>
                                        <td>
                                            <ButtonComponent
                                                style="info"
                                                onClick="editing"
                                                name="Edit"
                                            />

                                            <ButtonComponent
                                                style="danger"
                                                onClick="deleting"
                                                name="Delete"
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Listbook;
