import axios from "axios";
import { getCookieData } from "../utility/utility";


export const Signup = (data) => {
    return axios.post("https://crikonnect-api-production.up.railway.app/api/auth/signup", data)
}

export const SignIn = (data) => {
    return axios.post("https://crikonnect-api-production.up.railway.app/api/auth/login", data)
}

export const TeamCreation = (data) => {
    const AccessToken = getCookieData("authO_tk");

    return axios.post(
        "https://crikonnect-api-production.up.railway.app/api/team/create",
        data,
        {
            headers: {
                Authorization: `Bearer ${AccessToken}`,
            },
        }
    );
};

export const fetchMyTeam = () => {
    const AccessToken = getCookieData("authO_tk");

    return axios.get(
        "https://crikonnect-api-production.up.railway.app/api/team/myteam",
        {
            headers: {
                Authorization: `Bearer ${AccessToken}`,
            },
        }
    );
};


export const fetchGrounds = (location) => {
    const AccessToken = getCookieData('authO_tk');

    return axios.get("https://crikonnect-api-production.up.railway.app/api/grounds", {
        params: { location },
        headers: {
            Authorization: `Bearer ${AccessToken}`,
        },
    });
};


export const getProfiles = (location) => {
    const AccessToken = getCookieData('authO_tk');

    return axios.get("https://crikonnect-api-production.up.railway.app/api/user/profile", {
        params: { location },
        headers: {
            Authorization: `Bearer ${AccessToken}`,
        },
    });
};


export const Bookground = (data) => {
    const AccessToken = getCookieData('authO_tk');
    
    return axios.post(
        "https://crikonnect-api-production.up.railway.app/api/ground/book",
        data,
        {
            headers: {
                Authorization: `Bearer ${AccessToken}`,
            },
        }
    );
};