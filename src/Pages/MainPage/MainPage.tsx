
import MoviesList from "../../components/MoviesList/MoviesList";
import css from './MainPage.module.css'
import {useSearchParams} from "react-router-dom";
import {moviesService} from "../../services/moviesService";
import {IResponseWithPagination} from "../../types/responseWithPagination.type.ts";
import {IMoviesListItem} from "../../types/moviesListItem.type.ts";
import {useEffect, useState} from "react";
import {useTheme} from "../../store/theme.ts";

const MainPage = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [movieArr, setMovieArr] = useState<IResponseWithPagination<IMoviesListItem>>({});
    useEffect(() => {
        if(!searchParams.get('genre')) {
            moviesService.getByPage(searchParams.get('page')).then(({data}) =>
                setMovieArr(data)
            )
        }else {
            moviesService.getMovieByGenderId(searchParams.get('genre'), searchParams.get('page')).then(({data})=>
                setMovieArr(data))
        }
    }, [searchParams.get('page'), searchParams.get('genre')]);

    const {theme} = useTheme();

    return (
        <div className={theme==='dark' ? css.Dark : css.Light} id={'mainId'}
              >
            {
                movieArr && <MoviesList moviesObj={movieArr}/>
            }

        </div>
    );
};

export default MainPage;