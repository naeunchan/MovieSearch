const axios = require("axios");

require("dotenv").config();

const { API_ENDPOINT, API_KEY } = process.env;

exports.handler = async function (event) {
    const { title, year, page } = JSON.parse(event.body);

    const { data } = await axios({
        url: `${API_ENDPOINT}/?apikey=${API_KEY}&s=${title}&y=${year}&page=${page}}}`,
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });

    return {
        statusCode: 200,
        body: JSON.stringify(data),
    };
};
