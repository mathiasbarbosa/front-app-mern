import axios from 'axios'

export default axios.create(
    {
        baseURL: 'http://localhost:8000/api', // Base url will be completed with the endpoints of our backendd app
        responseType: 'json',
        timeout: 6000
    }
)