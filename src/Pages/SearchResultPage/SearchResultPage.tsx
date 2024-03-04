import {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {moviesService} from "../../services/moviesService";
import MoviesList from "../../components/MoviesList/MoviesList";
import {IResponseWithPagination} from "../../types/responseWithPagination.type.ts";
import {IMoviesListItem} from "../../types/moviesListItem.type.ts";

const SearchResultPage = () => {
    const [query, setQuery] = useSearchParams();
    const [results, setResults] = useState<IResponseWithPagination<IMoviesListItem>>({})

    let request = query.get('query');
    let page = query.get('page');

    useEffect(() => {

        moviesService.search(request,page).then(({data})=>{
            request = query.get('query');
            setResults(data);
        } )
    }, [request, page]);

    console.log(request, results)
    return (
        <div>
            <h2>Search results for {request}</h2>
            {
                results.total_results !== 0 &&  <MoviesList moviesObj={results}/>
            }
        </div>
    );
};

export default SearchResultPage;