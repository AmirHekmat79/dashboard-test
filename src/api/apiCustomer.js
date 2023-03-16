import request from './apiConfig';

export function getOneCustomer(param) {
  return request({
    url: `customers/${param}`,
    method: 'get',
  });
}
