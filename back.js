const axios = require('axios');
require('dotenv').config();

const api_url = process.env.FITNESS_SERVER;
const token = process.env.TOKEN;

const get = axios({url: `${api_url}`, method: "get", headers: {
        'Authorization': token
    },})

get.then(res =>
    console.log(res)).catch(err =>
    console.error(err))