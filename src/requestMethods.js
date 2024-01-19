import axios from 'axios';

const BASE_URL = "http://localhost:4200/api/v1";

export const api = "http://localhost:4200/api/v1"

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const API_URL = ({
    api: api,
    headers: { token: `Bearer${TOKEN}`}

})


 export const productRequest =  axios.create({
    baseURl: BASE_URL,
});

export const authRequest =  axios.create({
    baseURl: BASE_URL,
    headers: { token: `Bearer${TOKEN}`}
})

    export default {productRequest, authRequest}