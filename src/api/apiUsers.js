import request from './apiConfig';

export async function getOneUser(param) {
  return await request({
    url: `customers/${param}`,
    method: 'get',
  });
}
