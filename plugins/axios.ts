import axios from 'axios';

const port = 8000;
const host = '127.0.0.1';
const baseUrl = `http://${host}:${port}`;

export default function ({ $axios }: { $axios: any }) {
  $axios.defaults.baseURL = baseUrl;
}