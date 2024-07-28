import axios from 'axios';

const api = axios.create({
  baseURL: 'http://pets-v2.dev-apis.com',
});

export const fetchPets = () => api.get('/pets');
export const fetchPetById = (id) => api.get(`/pets?id=${id}`);
export const fetchBreeds = (animal) => api.get(`/breeds?animal=${animal}`);
export const searchPets = (animal, location, breed) => api.get(`/pets?animal=${animal}&location=${location}&breed=${breed}`);
