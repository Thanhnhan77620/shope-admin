import * as httpRequest from '~/utils/httpRequest';
const token = JSON.parse(localStorage.getItem('token')) || null;

export const getAllPaging = async (body = {}, params = {}) => {
    const configHeader = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        params
    }
    const res = await httpRequest.post('brands/paging', body, configHeader);
    return res;
};

export const getAll = async () => {
    const configHeader = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    }
    const res = await httpRequest.get('brands', configHeader);
    return res;
};

export const getBannerById = async (id) => {
    const configHeader = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    }
    const res = await httpRequest.get('brands/' + id, configHeader);
    return res;
};

export const remove = async (id) => {
    const configHeader = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    }
    const res = await httpRequest.remove('brands/' + id, configHeader);
    return res;
};

export const create = async (body = {}) => {
    const configHeader = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    }
    const res = await httpRequest.post('brands/', body, configHeader)
    return res;
};

export const update = async (body = {}) => {
    const configHeader = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    }
    const res = await httpRequest.patch('brands/' + body.id, body, configHeader)
    return res;
};