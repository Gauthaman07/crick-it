import axios from "axios";



export const Signup = (data) => {
    return axios.post("https://crikonnect-api-production.up.railway.app/api/auth/signup", data)
}

export const SignIn = (data) => {
    return axios.post("https://crikonnect-api-production.up.railway.app/api/auth/login", data)
}

export const TeamCreation = (data) => {
    return axios.post("https://crikonnect-api-production.up.railway.app/api/team/create", data)
}