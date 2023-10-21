import React, { useContext } from "react";
import { UserContext } from "../Context/UserProvider";

function useAuthe() {
    const { state: auth, dispatch } = useContext(UserContext);
    return { auth, dispatch };
}

export default useAuthe;
