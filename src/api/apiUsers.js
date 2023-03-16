import request from './apiConfig';

export async function getOneUser(param) {
  return await request({
    url: `/api/customers/${param}`,
    method: 'get',
  });
}
