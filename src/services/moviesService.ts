import {apiService} from "./apiService";
import {urla} from "../constants/urls";
import {IResponseWithPagination} from "../types/responseWithPagination.type.ts";
import {IMoviesListItem} from "../types/moviesListItem.type.ts";

const moviesService = {
    getByPage: (page : string) : Promise<IResponseWithPagination<IMoviesListItem>> => apiService(urla.movies.base+`?page=${page}`),
    getMovieById: (movieId : string | null) => apiService(urla.movies.byId+`/${movieId}`),
    getMovieByGenderId: (genderId : string, page : string) => apiService(urla.movies.base+`?with_genres=${genderId}&page=${page}`),
    search: (request : string, page : string) => apiService(urla.search.byWord+`?query=${request}&page=${page}`)
}
export {moviesService}