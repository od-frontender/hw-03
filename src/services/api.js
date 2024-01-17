import axios from 'axios';
const API = `https://jsonplaceholder.typicode.com/posts`;

const posts = {
  get: id => axios(API + (id ? `/${id}` : ``)).then(({ data }) => data),
  delete: id => axios.delete(API + `/${id}`).then(({ data }) => data),
  patch: (id, obj) => axios.patch(API + `/${id}`, obj).then(({ data }) => data),
  post: obj => axios.post(API, obj).then(({ data }) => data),
};

export default posts;
