import axios from 'axios';

import { url } from "./App-Server.js";

export const postLogin = async (data ) => {
    const result = await axios({

        method: "POST",
        url: `${url}/users`,
        data
    })

    console.log("CUERPO", result);


    return result

}