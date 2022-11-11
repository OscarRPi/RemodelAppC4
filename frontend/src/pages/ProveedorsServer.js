const API_URL = 'http://127.0.0.1:8000/proveedors/';

export const listProveedors = async () => {
    return await fetch(API_URL);
}