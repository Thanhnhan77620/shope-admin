import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 10000
});

// có async sẽ trả về promise
export const get = async (path, body = {}) => {
    try {
        const response = await httpRequest.get(path, body);
        const { data, status } = response;
        return { data, status };
    } catch (error) {
        const { errors, status } = error.response.data
        return { errors, status };
    }
};

export const post = async (path, body = {}, config = {}) => {
    try {
        const response = await httpRequest.post(path, body, config);
        const { data, status } = response;
        return { data, status };
    } catch (error) {
        //error.response.data
        // {
        //     "statusCode": 422,
        //     "errors": {
        //         "title": "titleAlreadyExists"
        //     },
        //     "timestamp": "2022-11-22T15:29:19.244Z",
        //     "path": "/api/v1/banners"
        // }
        console.log(error);
        const { errors, statusCode } = error.response.data
        return { errors, status: statusCode };
    }
};

export const patch = async (path, body = {}, config = {}) => {
    try {
        const response = await httpRequest.patch(path, body, config);
        const { data, status } = response;
        return { data, status };
    } catch (error) {
        const { errors, status } = error.response.data
        return { errors, status };
    }
};

export const remove = async (path, config = {}) => {
    try {
        const response = await httpRequest.delete(path, config);
        const { data, status } = response;
        return { data, status };
    } catch (error) {
        const { errors, status } = error.response.data
        return { errors, status };
    }
};

export default httpRequest;
