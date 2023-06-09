import { NuxtAxiosInstance } from '@nuxtjs/axios';

export const getBlogList = async (user_id: number, $axios: NuxtAxiosInstance) => {
  return await $axios.$get(`/blog/user/${user_id}`);
};

export const getBlog = async (id: number, $axios: NuxtAxiosInstance) => {
  return await $axios.$get(`/blog/${id}`);
};

export const createBlog = async (blog: any, $axios: NuxtAxiosInstance) => {
  return await $axios.$post('/blog', blog);
};

export const updateBlog = async (id: number, blog: any, $axios: NuxtAxiosInstance) => {
  return await $axios.$put(`/blog/${id}`, blog);
};

export const deleteBlog = async (id: number, $axios: NuxtAxiosInstance) => {
  return await $axios.$delete(`/blog/${id}`);
};
