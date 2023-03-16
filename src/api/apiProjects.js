import request from './apiConfig';

export async function getOneProject(param) {
  return await request({
    url: `projects/${param}`,
    method: 'get',
  });
}
