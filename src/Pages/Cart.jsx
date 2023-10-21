import React from "react";
import axios from "axios";
import BookComponent from "../Components/BookComponent";
import ButtonComponent from "../Components/ButtonComponent";
import { useState, useEffect } from "react";
import { factory } from "../factory/factory";
import { useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import { toast } from "react-toastify";
import useAuthe from "../customeHooks/useAuthe";

function Cart() {
    // const { state: auth, dispatch } = useContext(UserContext);
    const { auth, dispatch } = useAuthe();
    async function getCart() {
        const factory1 = new factory();
        const response = await factory1.get_list("cart", auth);
        setCart(response.items);

        // try {
        //     const response = await axios.get("http://localhost:8000/cart", {
        //         headers: {
        //             Authorization: `Bearer ${auth.access_token}`,
        //         },
        //     });

        //     setCart(response.data.items);
        // } catch (err) {
        //     toast.error(err.message);
        // }
    }

    async function add_cart(id) {
        const factory1 = new factory();
        await factory1.post_data("cart", { book: id }, auth);
        getCart();
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
        //     getCart();
        //     toast.success("Book added to cart");
        // } catch (err) {
        //     toast.error(err.message);
        // }
    }

    async function delete_cart(id) {
        // const factory1 = new factory();
        // await factory1.delete_data("cart/remove", id, auth);
        // getCart();
        try {
            console.log;
            await axios.post(
                `http://localhost:8000/cart/remove`,
                { book: id },
                {
                    headers: {
                        Authorization: `Bearer ${auth.access_token}`,
                    },
                }
            );

            toast.success("Book deleted from cart");
            getCart();
        } catch (err) {
            toast.error(err.message);
        }
    }

    useEffect(() => {
        getCart();
    }, []);

    const [cartshow, setCart] = useState([]);

    const [number, setNumber] = useState(1);

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 mt-3">
                        <h3 className="text-center">Cart List</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">S.N</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartshow.map((cart, index) => (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{cart?.book?.name}</td>
                                        <td>{cart?.book?.price}</td>
                                        <td>
                                            <img
                                                src={`http://localhost:8000/${cart?.book?.images}`}
                                                alt="book"
                                                width="50px"
                                                height="50px"
                                            />
                                        </td>
                                        <td>{cart?.quantity}</td>
                                        <td>
                                            <ButtonComponent
                                                style="info"
                                                operation={() => add_cart(cart?.book?._id)}
                                                name=" + "
                                            />

                                            <ButtonComponent
                                                style="danger"
                                                operation={() => delete_cart(cart?.book?._id)}
                                                name=" - "
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <td>
                                total amount :
                                {cartshow.reduce((total, item) => {
                                    return total + item.book.price * item.quantity;
                                }, 0)}
                            </td>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
