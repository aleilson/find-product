import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dummyjson.com/products/search',
});

export const getProducts = async () => {
  const response = await api.get('?q=');
  return response.data.products;
}