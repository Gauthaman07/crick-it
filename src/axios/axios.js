import axios from "axios";
import { getCookieData } from "../utility/utility";


const instance = axios.create({
    baseURL: 'https://crikonnect-api-production.up.railway.app/api',
});
// console.log("API Base URL:", process.env.CK_API_BASE_URL);

instance.interceptors.request.use(
    (request) => {
        const token = getCookieData("authO_tk");
        if (token) {
            request.headers["Authorization"] = `Bearer ${token}`;
        }
        return request;
    },
    (error) => Promise.reject(error)
);

export default instance;