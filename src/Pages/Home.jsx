import React, { useEffect } from "react";
import BookComponent from "../Components/BookComponent";
import ButtonComponent from "../Components/ButtonComponent";
import axios from "axios";
import { useState, useContext } from "react";
import { toast } from "react-toastify";
import { searchContext } from "../Context/SearchProvider";
import { factory } from "../factory/factory";
import useAuthe from "../customeHooks/useAuthe";
// import { UserContext } from "../Context/UserProvider";

function Home() {
    // const { state: auth, dispatch } = useContext(UserContext);
    const { auth, dispatch } = useAuthe();
    const { setFiltered_book, filtered_book } = useContext(searchContext);
    async function book_list() {
        const factory1 = new factory();
        const response = await factory1.get_list("book", auth);
        setBook(response);

        // try {
        //     let response = await axios.get(`http://localhost:8000/book`, {
        //         headers: {
        //             Authorization: `Bearer ${auth.access_token}`,
        //         },
        //     });
        //     setBook(response.data);
        // } catch (err) {
        //     toast.error(err.message);
        // }
    }

    async function add_cart(id) {
        const factory1 = new factory();
        await factory1.post_data("cart", { book: id }, auth);

        // try {
        //     await axios.post(
        //         `http://localhost:8000/cart`,
        //         { book: id },
        //         {
        //             headers: {
        //                 Authorization: `Bearer ${auth.access_token}`,
        //             },
        //         }
        //     );
        //     toast.success("Book added to cart");
        // } catch (err) {
        //     toast.error(err.message);
        // }
    }

    const [book, setBook] = useState([]);

    useEffect(() => {
        book_list();
        setFiltered_book(null);
    }, []);
    return (
        <>
            <div className="container">
                <h1 className="text-center mt-3">Our Books</h1>
                <div className="row my-3" data-masonry='{"percentPosition": true }'>
                    {filtered_book
                        ? filtered_book.map((book) => (
                              <div key={book._id} className="col-4">
                                  <BookComponent
                                      src={`http://localhost:8000/${book.images}`}
                                      alt={book.name}
                                      name={book.name}
                                      price={book.price}
                                      isbn={book.isbn}
                                      key={book._id}
                                  />
                                  <ButtonComponent
                                      operation=""
                                      style="primary"
                                      name="Add to Cart"
                                  />
                              </div>
                          ))
                        : book.map((book) => (
                              <div key={book._id}>
                                  <BookComponent
                                      src={`http://localhost:8000/${book.images}`}
                                      alt={book.name}
                                      name={book.name}
                                      price={book.price}
                                      isbn={book.isbn}
                                      key={book._id}
                                  />
                                  <ButtonComponent
                                      operation={() => add_cart(book._id)}
                                      style="primary"
                                      name="Add to Cart"
                                  />
                              </div>
                          ))}
                </div>
            </div>
        </>
    );
}

export default Home;
