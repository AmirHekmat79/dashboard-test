import request from './apiConfig';

export function getOneCustomer() {
  return request({
    url: `customers`,
    method: 'get',
  });
}
