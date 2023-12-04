import React, { useEffect, useContext } from "react";
import ButtonComponent from "../Components/ButtonComponent";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserProvider";
import { factory } from "../factory/factory";
import useAuthe from "../customeHooks/useAuthe";
import { getBooks, deleteBook } from "../api/request.Api";

function Listbook() {
    const navigate = useNavigate();
    // const { state: auth, dispatch } = useContext(UserContext);
    const { auth, dispatch } = useAuthe();
    async function book_list() {
        // const factory1 = new factory();
        // const response = await factory1.get_list("book", auth);
        // setBook(response);
        try {
            const response = await getBooks();
            console.log(response.data);
            setBooks(response.data);
        } catch (error) {
            toast.error("Something went wrong");
        }
    }

    const delete_book = async (id) => {
        // const factory1 = new factory();
        // await factory1.delete_data("book", id, auth);
        // book_list();

        try {
            // await axios.delete(`http://localhost:8000/book/${id}`);
            await deleteBook(id);
            book_list();
            toast.success("Book deleted successfully");
        } catch (err) {
            toast.error(err.message);
        }
    };

    useEffect(() => {
        book_list();
    }, []);

    const [book, setBooks] = useState([]);
    console.log(book);
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
                                            <img
                                                src={`http://localhost:8000/${item.images}`}
                                                width="50px"
                                                height="50px"
                                            />
                                        </td>
                                        <td>{item.category.name}</td>

                                        <td>{item.isbn}</td>
                                        <td>
                                            <ButtonComponent
                                                style="info"
                                                operation={() => navigate(`/editbook/${item._id}`)}
                                                name="Edit"
                                            />

                                            <ButtonComponent
                                                style="danger"
                                                operation={() => delete_book(item._id)}
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
