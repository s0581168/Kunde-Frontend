import axios from 'axios'

const endpoint = 'http://localhost:8080/api/v1/kunde_verwaltung'

class Service {
  getEmployees () {
    return axios.get(endpoint)
  }
}

export default new Service()
