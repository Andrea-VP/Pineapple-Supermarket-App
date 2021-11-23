import axios from 'axios';

import { url } from "./App-Server.js";

const getToken = localStorage.getItem('token');


export const postAuth = async (email, password) => {
    const response = await fetch(`${url}/auth`, {
        method: 'POST',
        body:
            JSON.stringify
                ({
                    email,
                    password
                }),
        headers: { 'Content-Type': 'application/json' }
    })
    console.log("CUERPO", response);

    const dataJSON = await response.json();

    // return dataJSON
    if (response.status === 200) {
        return dataJSON;
    } else if (response.status === 400) {
        // throw new Error('error de acceso');
        alert('Error de acceso')
    }
}


export const createUser = async (data) => {

    const result = await axios({

        method: "POST",
        url: `${url}/users`,
        data,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    })

    console.log("HEADERS", result);

    return result
}

export const signIn = async (data ) => {
    const response = await axios({

        method: "POST",
        url: `${url}/auth`,
        data
    })

    console.log("signIn", response);

    return response
}