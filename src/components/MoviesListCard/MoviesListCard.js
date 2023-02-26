import React from 'react';
import {useNavigate} from "react-router-dom";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {StarsRating} from "../StarsRating/StarsRating";


const MoviesListCard = ({movie}) => {
    const {id, original_title, vote_average, poster_path} = movie;

    const navigate = useNavigate();

    return (
        <div style={{border: "1px solid", margin: "10px", borderRadius: "1%", background: "white"}}>
            {movie.name && <div>name: {movie.name}</div>}
            {original_title && <div>
                <PosterPreview poster_path={poster_path}/>
                <div>{original_title}</div>
                <StarsRating vote_average={vote_average}/></div>}
            <div>
                <button onClick={() => {
                    navigate(`/details/${id}`)
                }}>details
                </button>
            </div>
        </div>
    );
};

export {MoviesListCard};
