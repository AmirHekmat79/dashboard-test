import request from './apiConfig';

export async function getOneLicense() {
  return await request({
    url: `licenses`,
    method: 'get',
  });
}
