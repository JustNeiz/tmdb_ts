import React, {useEffect, useState} from 'react';

import MovieInfo from "../../components/MovieInfo/MovieInfo";
import css from './MoviePage.module.css'

const MoviePage = () => {


    return (
        <div className={css.MoviePage}>
            <MovieInfo/>
        </div>
    );
};

export default MoviePage;