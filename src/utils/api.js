import axios from "axios";

const params = {
    headers: {
        Authorization: "bearer " + process.env.REACT_APP_STRAPI_API_KEY,
    },
};

export const fetchDataFromAPI = async (url) => {
    try {
        const { data } = await axios.get(
            process.env.REACT_APP_DEV_URL + url,
            params
        );
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
};
