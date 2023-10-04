import React, { useEffect } from "react";
import BookComponent from "../Components/BookComponent";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

function Home() {
    async function book_list() {
        try {
            let response = await axios.get(`http://localhost:8000/book`);
            setBook(response.data);
            console.log(response.data);
        } catch (err) {
            toast.error(err.message);
        }
    }

    const [book, setBook] = useState([]);

    useEffect(() => {
        book_list();
    }, []);
    return (
        <>
            <div className="container">
                <h1 className="text-center mt-3">Our Books</h1>
                <div className="row my-3" data-masonry='{"percentPosition": true }'>
                    {book.map((book) => {
                        return (
                            <BookComponent
                                src={`http://localhost:8000/${book.images}`}
                                alt={book.name}
                                name={book.name}
                                price={book.price}
                                isbn={book.isbn}
                                key={book._id}
                                style={{ width: "50" }}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Home;
