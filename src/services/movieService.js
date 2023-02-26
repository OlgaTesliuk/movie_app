import {apiService} from "./apiService";
import {urls} from "../configs/urls";


const movieService = {
    getAllMovies: (page = 1) => apiService.get(urls.movies, {params: {page}}),
    getMovieById: (id) => apiService.get(`/movie/${id}`),
    getMoviesByGenre: (id, page = 1) => apiService.get(`/discover/movie?with_genres=${id}&page=${page}`),
    genreMovie: () => apiService.get(urls.genre),
    searchKeyword: (keyword) => apiService.get(`/search/keyword?query=${keyword}`),
    searchPoster: (pathPoster) => apiService.get(`/w200/${pathPoster}`)
}

export {
    movieService
}
