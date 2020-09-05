import http from '../http-common';

const getAll = () => {
  const log = http.get('/grade');
  console.log("************ log:",log);
  return log;
};

const get = (id) => {
  return http.get(`/grade/${id}`);
};

const create = (data) => {
  return http.post('/grade', data);
};

const update = (id, data) => {
  return http.put(`/grade/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/grade/${id}`);
};

const removeAll = () => {
  return http.delete(`/grade`);
};

const findByName = (name) => {
  return http.get(`/grade?name=${name}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByName,
};
