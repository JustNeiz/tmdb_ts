import {FC, Suspense} from 'react';

import css from './MoviesListCard.module.css'
import {imgBaseUrl} from "../../constants/urls";
import StarRating from "../StarRating/StarRating";
import {useNavigate} from "react-router-dom";
import Badge from '@mui/material/Badge';
import {IMoviesListItem} from "../../types/moviesListItem.type.ts";
import OverviewTitle from "../OverviewTitle/OverviewTitle.tsx";

interface Props{
    movie : IMoviesListItem
}
const MoviesListCard : FC<Props> = ({movie}) => {

    const navigate = useNavigate();
    let voteAverage =null;
    if(movie.vote_average>=8){
        voteAverage = 'High rating movie';
    }
    return (
        <Suspense>
            <div className={css.MoviesListCardContainer}>
            <div className={css.MoviesListCard}
                 style={{ backgroundImage: `url('${imgBaseUrl}${movie.poster_path}')` }}
                 onClick={() => navigate(`/movie?movieId=${movie.id}`)}
                 >
                <Badge color={'primary'}
                       badgeContent={voteAverage}>
                <div className={css.Stars}>
                    <StarRating rating={movie.vote_average}/>
                <span>{movie.vote_average}/10</span>
                </div>
                 </Badge>
                <div className={css.Title}>
                <OverviewTitle text={movie.overview}/>
                </div>
            </div>
                <h6>{movie.title}</h6>

            </div>
        </Suspense>
    );
};

export default MoviesListCard;