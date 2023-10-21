import axios from "axios";
import { toast } from "react-toastify";
let host = "http://localhost:8000/";
export class factory {
    async get_list(url, auth) {
        try {
            const response = await axios.get(`${host}${url}`, {
                headers: {
                    Authorization: `Bearer ${auth.access_token}`,
                },
            });

            return response.data;
        } catch (err) {
            toast.error(err.message);
        }
    }

    async get_list_id(url, id, auth) {
        try {
            const response = await axios.get(`${host}${url}/${id}`, {
                headers: {
                    Authorization: `Bearer ${auth.access_token}`,
                },
            });

            return response.data;
        } catch (err) {
            toast.error(err.message);
        }
    }

    async post_data(url, data, auth) {
        try {
            const response = await axios.post(`${host}${url}`, data, {
                headers: {
                    Authorization: `Bearer ${auth.access_token}`,
                },
            });

            if (response.status === 200) {
                toast.success("Data added successfully");
            } else {
                toast.error("Failed to add data. Server returned an unexpected status.");
            }
        } catch (err) {
            toast.error(err.message);
        }
    }

    async delete_data(url, id, auth) {
        try {
            const response = await axios.delete(`${host}${url}/${id}`, {
                headers: {
                    Authorization: `Bearer ${auth.access_token}`,
                },
            });
            return response.data;
        } catch (err) {
            toast.error(err.message);
        }
    }

    async put_data(url, data, id, auth) {
        try {
            const response = await axios.put(`${host}${url}/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${auth.access_token}`,
                },
            });
            return response.data;
        } catch (err) {
            toast.error(err.message);
        }
    }
}
