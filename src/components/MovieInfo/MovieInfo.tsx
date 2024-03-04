import {Suspense, useEffect, useState} from 'react';
import css from "./MovieInfo.module.css"
import { imgBaseUrl } from "../../constants/urls";
import { useSearchParams } from "react-router-dom";
import { moviesService } from "../../services/moviesService";
import { IGenre } from "../../types/genre.type.ts";
import { IMovie } from "../../types/movie.type.ts";

const MovieInfo = () => {
    const [query] = useSearchParams();
    const movieId = query.get('movieId');
    const [movie, setMovie] = useState<IMovie | null>(null);

    useEffect(() => {
        if (movieId) {
            moviesService.getMovieById(movieId).then(({ data }) => {
                console.log(data);
                setMovie(data as IMovie);
            });
        }
    }, [movieId]);


    const original_title = movie ? movie.original_title : '';
    const overview = movie ? movie.overview : '';
    const genres = movie ? movie.genres : [];
    const poster_path = movie ? movie.poster_path : '';

    return (
        <div className={css.MovieInfo}>
            <Suspense>
            <h1>{original_title}</h1>
                <div className={css.Container}>
            {poster_path && <img src={`${imgBaseUrl}${poster_path}`} alt={'poster'} />}
                <div>
                {genres && genres.map((genre: IGenre) => <p key={genre.id}>{genre.name}</p>)}
                    <h5>{overview}</h5>
                </div>
                </div>
            </Suspense>
        </div>
    );
};

export default MovieInfo;
