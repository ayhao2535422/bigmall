import axios from 'axios'

export function request(config) {
  let instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/n3',
    timeout: 5000
  })
  instance.interceptors.request.use(result => {
    return result
  }, err => {
    console.log(err)
  })
  instance.interceptors.response.use(result => {
    return result.data
  }, err => {
    console.log(err)
  })

  return instance(config)
}