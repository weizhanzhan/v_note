import axios from 'axios'
export const $fetch = ({ url, method = 'get', data, headers = {} }) => {
    const option = {
      url,
      method,
      ...(method === 'post' ? { data } : null),
      ...(method === 'get' ? { params: data } : null),
      headers: {
        ...(localStorage.getItem('github_token') ? { 'Authorization': localStorage.getItem('github_token') } : null),
        ...headers
      }
    }
    return axios(option).then(({ status, data }) => {
      return {
        status,
        data
      }
    }).catch(({ response }) => {
      return {
        status: response.status,
        data: response.data
      }
    })
  }
  