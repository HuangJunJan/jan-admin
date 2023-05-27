import axios from 'axios'

const request = axios.create({
  baseURL: '/jan-admin',
  timeout: 30 * 1000
})

export default request