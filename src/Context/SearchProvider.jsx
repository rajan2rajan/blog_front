import React, { createContext } from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { factory } from "../factory/factory";
import { useContext } from "react";
import { UserContext } from "./UserProvider";

export const searchContext = createContext();
function SearchProvider({ children }) {
    const { state: auth, dispatch } = useContext(UserContext);
    const [filtered_book, setFiltered_book] = useState(null);

    async function searching(e, search) {
        e.preventDefault();

        if (search === "") {
            setFiltered_book(null);
            return;
        } else {
            const factory1 = new factory();
            const data = await factory1.get_list(`book/search/${search}`, auth);
            const response = await axios.get(`http://localhost:8000/book/search/${search}`);
            setFiltered_book(response.data);
        }
    }
    return (
        <>
            <searchContext.Provider value={{ searching, filtered_book, setFiltered_book }}>
                {children}
            </searchContext.Provider>
        </>
    );
}

export default SearchProvider;
