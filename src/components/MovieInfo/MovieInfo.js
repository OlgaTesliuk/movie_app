import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {movieService} from "../../services/movieService";

const MovieInfo = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState(null)
    const {selectedMovie} = useSelector(state => state.movies);

    const navigate = useNavigate();

    useEffect(() => {
        movieService.getMovieById(id).then(({data}) => {
            console.log("data: " + data)
            setMovie(data)
        })
    }, [])

    return (
        <div style={{margin: "30px"}}>{movie &&
            <>
                <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="image"/>
                <div>{movie.original_title}</div>
                <div>genres:{movie.genres.map(value =>
                    <div key={value.id}>{value.name}</div>
                )}</div>
                <div>overview:{movie.overview}</div>
                <img src={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`} alt="image"/>
                <div>tagline:{movie.tagline}</div>

                {selectedMovie.id}
                <button onClick={() => {
                    navigate('/')
                }}>back
                </button>
            </>
        }
        </div>
    );
};

export {MovieInfo};