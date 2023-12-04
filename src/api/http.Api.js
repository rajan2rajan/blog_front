import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const httpApi = axios.create({
    baseURL: "http://127.0.0.1:8000",
});

httpApi.interceptors.request.use((config) => {
    const token = JSON.parse(localStorage.getItem("access_token"));
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

const refreshToken = async () => {
    try {
        const refresh = JSON.parse(localStorage.getItem("refresh_token"));
        const resp = await httpApi.post("/auth/refresh", { refresh_token: refresh });
        return resp.data;
    } catch (e) {
        toast.error("Please login again");
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");

        const navigate = useNavigate();
        navigate("/login");
    }
};

httpApi.interceptors.response.use(
    (response) => {
        return response;
    },
    async function (error) {
        const originalRequest = error.config;
        if (error.response.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true;

            const resp = await refreshToken();
            const access_token = resp.data.access_token;
            localStorage.setItem("access_token", JSON.stringify(access_token));
            httpApi.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
            console.log("sucessfull");
            return httpApi(originalRequest);
        }
        return Promise.reject(error);
        // return;
    }
);

export default {
    get: httpApi.get,
    post: httpApi.post,
    put: httpApi.put,
    delete: httpApi.delete,
};
