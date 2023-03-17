import request from './apiConfig';

export async function getOneUser() {
  return await request({
    url: `customers`,
    method: 'get',
  });
}
