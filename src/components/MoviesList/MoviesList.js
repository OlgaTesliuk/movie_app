import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useParams, useSearchParams} from "react-router-dom";
import {movieActions} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";


const MoviesList = () => {
    const {movies, activePage, keyword, searchIsActive} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});
    const {id} = useParams();
    const location = useLocation()
    console.log(location);


    useEffect(() => {
        if (location.pathname === '/movies') {
            dispatch(movieActions.getMovies({page: query.get('page')}))
        }
        if (location.pathname.includes("genre")) {
            dispatch(movieActions.getMoviesByGenre({id: id, page: query.get('page')}))
        }
        if (location.pathname.includes("keyword")) {
            dispatch(movieActions.searchMovie({keyword: keyword}))
            dispatch(movieActions.setKeyword(""))
        }
    }, [dispatch, query, id, searchIsActive,])

    const dis = () => activePage >= 1
    return (
        <div>
            <div style={{textAlign: "center"}}>
                <button style={{fontSize: "30px", padding: "10px", margin: "20px"}} disabled={dis()}
                        onClick={() => setQuery(query => ({page: +query.get('page') - 1}))}>prev
                </button>
                <button style={{fontSize: "30px", padding: "10px", margin: "20px"}}
                        onClick={() => setQuery(query => ({page: +query.get('page') + 1}))}>next
                </button>
            </div>
            <div style={{display: "flex", flexWrap: "wrap"}}>  {movies.map(movie => <MoviesListCard key={movie.id}
                                                                                                    movie={movie}/>)}</div>
        </div>
    );
};

export {MoviesList};