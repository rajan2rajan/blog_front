import React from "react";
import InputComponent from "../Components/InputComponent";
import ButtonComponent from "../Components/ButtonComponent";
import { factory } from "../factory/factory";
import { useContext } from "react";
// import useAuthe from "../customeHooks/useAuthe";
import { UserContext } from "../Context/UserProvider";

function AddCategory() {
    const { state: auth, dispatch } = useContext(UserContext);
    // const { auth, dispatch } = useAuthe();
    async function handleSubmit(e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const status = document.getElementById("status").value;
        const factory1 = new factory();
        console.log(name, status);
        await factory1.post_data("category", { name, status }, auth);

        // try {
        //     await axios.post("http://localhost:8000/category", { name, status });
        //     toast.success("Category added successfully");
        // } catch (err) {
        //     toast.error("please fill all the fields");
        // }
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 mt-3">
                        <h3 className="text-center">Add category</h3>
                        <div className="mb-3">
                            <form onSubmit={handleSubmit}>
                                <InputComponent
                                    label="Name"
                                    id="name"
                                    name="name"
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
                                >
                                    <option selected value="active">
                                        active
                                    </option>
                                    <option value="inactive">inactive</option>
                                </select>
                                <br />

                                <ButtonComponent
                                    label="Add Book"
                                    type="submit"
                                    style="primary"
                                    name="Add"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddCategory;
