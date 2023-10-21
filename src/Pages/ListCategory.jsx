import React, { useEffect } from "react";
import LinkComponent from "../Components/LinkComponent";
import ButtonComponent from "../Components/ButtonComponent";
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../Context/UserProvider";
import { factory } from "../factory/factory";
// import useAuthe from "../customeHooks/useAuthe";

function ListCategory() {
    const navigate = useNavigate();
    const { state: auth, dispatch } = useContext(UserContext);
    // const { auth, dispatch } = useAuthe();
    async function category_list() {
        const factory1 = new factory();
        const response = await factory1.get_list("category", auth);
        setCategory(response);

        // try {

        // let response = await axios.get("http://localhost:8000/category", {
        //     headers: {
        //         Authorization: `Bearer ${auth.access_token}`,
        //     },
        // });
        // setCategory(response.data);
        // } catch (err) {
        //     toast.error("Something went wrong");
        // }
    }

    async function delete_category(id) {
        const factory1 = new factory();
        await factory1.delete_data("category", id, auth);
        category_list();
        // try {
        //     await axios.delete(`http://localhost:8000/category/${id}`);
        //     category_list();

        //     toast.success("Category deleted successfully");
        // } catch (err) {
        //     alert(err.message);
        // }
    }

    useEffect(() => {
        category_list();
    }, []);

    const [category, setCategory] = useState([]);

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 mt-3">
                        <h3 className="text-center">Category List</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">S.N</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">active/inactive</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {category.map((item, index) => (
                                    <tr key={item._id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.name}</td>

                                        <td>{item.status}</td>
                                        <td>
                                            <ButtonComponent
                                                style="info"
                                                type="button"
                                                operation={() =>
                                                    navigate(`/addcategory/${item._id}`)
                                                }
                                                name="Edit"
                                            />

                                            <ButtonComponent
                                                style="danger"
                                                type="button"
                                                operation={() => delete_category(item._id)}
                                                name="delete"
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

export default ListCategory;
