import { NuxtAxiosInstance } from '@nuxtjs/axios';

export const getAllUsers = async ($axios: NuxtAxiosInstance) => {
  return await $axios.$get('/user');
};

export const getUser = async (id: string, $axios: NuxtAxiosInstance) => {
  return await $axios.$get(`/user/${id}`);
};

export const createUser = async (user: any, $axios: NuxtAxiosInstance) => {
  return await $axios.$post('/user', user);
};

export const updateUser = async (user: any, $axios: NuxtAxiosInstance) => {
  return await $axios.$put(`/user/${user.id}`, user);
};

export const deleteUser = async (id: string, $axios: NuxtAxiosInstance) => {
  return await $axios.$delete(`/user/${id}`);
};
