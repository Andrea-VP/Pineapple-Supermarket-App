import axios from 'axios';

import { url } from "./App-Server.js";

const token = localStorage.token

export const getUsers = async () => {
    try {
    const resp = await axios({
        method: 'GET',
        url: `${url}/users`,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    })
    if (resp.status !== 200) {
        return new Error('Error');
      } 
      
      return resp;
    } catch(err){
        return err
    }   
}

export const editUser = async (objectEdit, userId) => {
    try {
        const resp = await axios({
            method: 'PUT',
            url: `${url}/users/${userId}`,
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

export const createUser = async (data) => {
    const resp = await axios({
        method: "POST",
        url: `${url}/users`,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        data,
    })

    return resp
}

export const deleteUser = async (userId) => {
    try {
        const resp = await axios({
            method: 'DELETE',
            url: `${url}/users/${userId}`,
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

export const signIn = async (data ) => {
    const resp = await axios({
        method: "POST",
        url: `${url}/auth`,
        data,
    })

    return resp
}