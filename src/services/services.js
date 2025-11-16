// ==========================================
// API SERVICES COMMENTED OUT FOR REVAMP
// ==========================================

/*
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
        "https://crikonnect-api-production.up.railway.app/api/ground-booking/book",
        data,
        {
            headers: {
                Authorization: `Bearer ${AccessToken}`,
            },
        }
    );
};


export const updateBookingStatus = (data) => {
    const AccessToken = getCookieData('authO_tk');

    // Log the request data
    console.log('Sending update request:', data);

    return axios.post(
        `https://crikonnect-api-production.up.railway.app/api/ground-booking/update-status/${data.bookingId}`,
        { status: data.status },
        {
            headers: {
                Authorization: `Bearer ${AccessToken}`,
                'Content-Type': 'application/json'
            },
        }
    );
};
*/

// Temporary stub exports to prevent import errors
export const Signup = () => Promise.resolve({ data: {} });
export const SignIn = () => Promise.resolve({ data: {} });
export const TeamCreation = () => Promise.resolve({ data: {} });
export const fetchMyTeam = () => Promise.resolve({ data: {} });
export const fetchGrounds = () => Promise.resolve({ data: [] });
export const getProfiles = () => Promise.resolve({ data: {} });
export const Bookground = () => Promise.resolve({ data: {} });
export const updateBookingStatus = () => Promise.resolve({ data: {} });