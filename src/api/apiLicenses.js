import request from './apiConfig';

export async function getOneLicense(param) {
  return await request({
    url: `/api/licenses/${param}`,
    method: 'get',
  });
}
