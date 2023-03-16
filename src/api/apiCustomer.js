import request from './apiConfig';

export function getOneCustomer(param) {
  return request({
    url: `/api/customers/${param}`,
    method: 'get',
  });
}
