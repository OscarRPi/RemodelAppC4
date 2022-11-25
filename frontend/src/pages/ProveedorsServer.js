const API_URL = 'http://localhost:30000/proveedors';

export const listProveedors = async () => {
    return await fetch(API_URL);
}