import request from './apiConfig';

export async function getOneProject(param) {
  return await request({
    url: `/api/projects/${param}`,
    method: 'get',
  });
}
