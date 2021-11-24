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

export const deleteProduct = async (productId) => {
    try {
        const resp = await axios({
            method: 'DELETE',
            url: `${url}/products/${productId}`,
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
          });
        return resp;
    } catch (error) {
        return error
    }
}

export const editProduct = async (objectEdit, productId) => {
    try {
        const resp = await axios({
            method: 'PUT',
            url: `${url}/products/${productId}`,
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            data:JSON.stringify(objectEdit),
          });
        return resp;
    } catch (error) {
        return error
    }
}