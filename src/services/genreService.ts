import {apiService} from "./apiService";
import {urla} from "../constants/urls";
import {IGenre} from "../types/genre.type.ts";
const genreService = {
    getAll: () : Promise<IGenre[]> => apiService.get(urla.genre.base)
}

export {genreService}