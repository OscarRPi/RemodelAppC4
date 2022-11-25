const API_URL = 'http://localhost:30000/products';

export const listProducts = async () => {
    return await fetch(API_URL);
}