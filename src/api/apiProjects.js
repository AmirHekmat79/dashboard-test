import request from './apiConfig';

export async function getOneProject() {
  return await request({
    url: `projects`,
    method: 'get',
  });
}
