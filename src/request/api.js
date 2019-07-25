import request from './http-service'

const baseUrl = 'http://localhost:8088/packages'
export const api = {
  get () {
    return request.get(baseUrl)
  },
  add (param) {
    return request.post(baseUrl, param)
  },
  update (param) {
    return request.put(`${baseUrl}/${param.id}`)
  },
  book (param) {
    return request.put(baseUrl, param)
  },
  filter (param) {
    return request.get(baseUrl, param)
  },
  // deleteItem(param) {
  //   return request.delete(`${baseUrl}/${param.id}`, param)
  // }
};