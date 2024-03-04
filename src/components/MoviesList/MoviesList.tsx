import  {FC} from 'react';

import css from './MoviesList.module.css'
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import PaginationContainer from "../PaginationContainer/PaginationContainer";
import {IResponseWithPagination} from "../../types/responseWithPagination.type.ts";
import {IMoviesListItem} from "../../types/moviesListItem.type.ts";
import {useTheme} from "../../store/theme.ts";

interface Props {
    moviesObj : IResponseWithPagination<IMoviesListItem> | null
}
const MoviesList : FC<Props>= ({moviesObj}) => {
    const {results, total_pages} = moviesObj;


    return (
        <div className={css.MoviesList}>
            {
                moviesObj?.results && results.map((movie : IMoviesListItem ) => <MoviesListCard movie={movie} key={movie.id}/>)
            }
            <PaginationContainer total_pages={total_pages}/>
        </div>
    );
};

export default MoviesList;