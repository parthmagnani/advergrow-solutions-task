import axios from "axios";
import { API_URL } from "../@advergrow/utils/utils";

export const getUserList = async () => {
    const response = await axios.get(API_URL + 'users');

    return response.data;
}


export const getUserDataById = async (payload: any) => {
    const response = await axios.get(API_URL + `users/${payload}`);
    return response;
}

export const addUser = async (payload: any) => {
    const response = await axios.post(API_URL + `users`, payload);
    return response;
}