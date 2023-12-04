import React, { createContext, useReducer } from "react";

export const UserContext = createContext();

const initialState = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    isLoggedIn: localStorage.getItem("access_token") ? true : false,
    access_token: localStorage.getItem("access_token")
        ? JSON.parse(localStorage.getItem("access_token"))
        : null,
};

function UserProvider({ children }) {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "login":
                localStorage.setItem("user", JSON.stringify(action.payload.user));
                localStorage.setItem("access_token", JSON.stringify(action.payload.access_token));
                localStorage.setItem("refresh_token", JSON.stringify(action.payload.refresh_token));
                return {
                    ...state,
                    user: action.payload.user,
                    access_token: action.payload.access_token,
                    refresh_token: action.payload.refresh_token,
                    isLoggedIn: true,
                };
            case "logout":
                localStorage.removeItem("user");
                localStorage.removeItem("access_token");
                localStorage.removeItem("refresh_token");
                return {
                    ...state,
                    user: null,
                    access_token: null,
                    refresh_token: null,
                    isLoggedIn: false,
                };

            default:
                return state;
        }
    }, initialState);
    return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
}

export default UserProvider;
