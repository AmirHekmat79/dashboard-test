import request from './apiConfig';

export async function getOneLicense(param) {
  return await request({
    url: `licenses/${param}`,
    method: 'get',
  });
}
