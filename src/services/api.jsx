import axios from 'axios';

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const targetUrl = 'http://pets-v2.dev-apis.com';

const api = axios.create({
  baseURL: proxyUrl + targetUrl,
});

export const fetchPets = () => api.get('/pets');
export const fetchPetById = (id) => api.get(`/pets?id=${id}`);
export const fetchBreeds = (animal) => api.get(`/breeds?animal=${animal}`);
export const searchPets = (animal, location, breed) => api.get(`/pets?animal=${animal}&location=${location}&breed=${breed}`);
