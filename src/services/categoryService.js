import * as httpRequest from '~/utils/httpRequest';
const token = JSON.parse(localStorage.getItem('token')) || null;

export const getAll = async (body = {}, params = {}) => {
    const configHeader = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        params
    }
    const res = await httpRequest.post('categories/paging', body, configHeader);
    return res;
};

export const getCategoryById = async (id) => {
    const configHeader = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    }
    const res = await httpRequest.get('categories/' + id, configHeader);
    return res;
};

export const remove = async (id) => {
    const configHeader = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    }
    const res = await httpRequest.remove('categories/' + id, configHeader);
    return res;
};

export const create = async (body = {}) => {
    const configHeader = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    }
    const res = await httpRequest.post('categories/', body, configHeader)
    return res;
};

export const update = async (body = {}) => {
    const configHeader = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    }
    const res = await httpRequest.patch('categories/' + body.id, body, configHeader)
    return res;
};