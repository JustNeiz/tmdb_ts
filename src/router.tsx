import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout.tsx";
import MainPage from "./Pages/MainPage/MainPage.tsx";
import SearchResultPage from "./Pages/SearchResultPage/SearchResultPage.tsx";
import MoviePage from "./Pages/MoviePage/MoviePage.tsx";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children:[
            {
                index: true, element: <Navigate to={'main?page=1'}/>
            },
            {
                path: '/main', element: <MainPage/>
            },
            {
                path: 'results', element: <SearchResultPage/>
            },
            {
                path: 'movie', element: <MoviePage/>, children:[
                    {
                        index: true, element: <Navigate to={'/main?page=1'}/>
                    },
                ]
            }
        ]
    }
])
export {router}