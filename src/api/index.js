import axios from 'axios'

const api = axios.create({
  headers: { 
      'X-Auth-Token': process.env.VUE_APP_API_KEY,
  },
  baseURL: 'https://api.football-data.org/v2/competitions/CL/standings',
})

export default {
  standings: () => api.get()
}