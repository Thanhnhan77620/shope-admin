import * as httpRequest from '~/utils/httpRequest';
const token = JSON.parse(localStorage.getItem('token')) || null;

export const getAll = async (body = {}, params = {}) => {
    const configHeader = {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        params,
    };
    const res = await httpRequest.post('products/paging', body, configHeader);
    return res;
};

export const getBannerById = async (id) => {
    const configHeader = {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    };
    const res = await httpRequest.get('products/' + id, configHeader);
    return res;
};

export const remove = async (id) => {
    const configHeader = {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    };
    const res = await httpRequest.remove('products/' + id, configHeader);
    return res;
};

export const create = async (body = {}) => {
    const configHeader = {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    };
    const res = await httpRequest.post('products/', body, configHeader);
    return res;
};

export const update = async (body = {}) => {
    const configHeader = {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    };
    const res = await httpRequest.patch('products/' + body.id, body, configHeader);
    return res;
};

export const searChing = async (body = {}, params = {}) => {
    const configHeader = {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        params,
    };
    const res = await httpRequest.post('products/searching', body, configHeader);
    return res;
};
