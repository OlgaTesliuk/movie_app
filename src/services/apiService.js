import axios from "axios";
import {baseURL} from "../configs/urls";


const apiService = axios.create({baseURL});

apiService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWY2M2ViMmUyMWJlODY0MzIxNDg1Y2UwMTdiYmU0ZiIsInN1YiI6IjYzZjUyOWQ0ZTJmZjMyMDBhMTJjNTYwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tEA5GWCQ9yPz1Rlz5dWYH1B9_qwotN5p-jOd9KGOE2Y`
    return config
})

export {
    apiService
}
