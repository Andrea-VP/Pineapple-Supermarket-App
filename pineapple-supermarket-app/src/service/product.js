import axios from 'axios';

import { url } from "./App-Server.js";

const token = localStorage.token

export const getProducts = async (data) => {
    const resp = await axios({
        method: "GET",
        url: `${url}/products`,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        data,
    })

    return resp
}

export const createProduct = async (data) => {
    const resp = await axios({
        method: "POST",
        url: `${url}/products`,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        data,
    })

    return resp
}