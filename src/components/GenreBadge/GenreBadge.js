import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {movieService} from "../../services/movieService";

const GenreBadge = ({setGenresOn}) => {
    const [genre, setGenre] = useState([]);
    useEffect(() => {
        movieService.genreMovie().then(({data}) => {
                console.log("responseGenres: " + data.genres)
                setGenre(data.genres)
            }
        )
    }, []);
    return (
        <div style={{
            background: "grey", width: "200px", position: "absolute", marginTop: "650px", border: "1px solid",
            padding: "20px", textAlign: "center", borderRadius: "5%", zIndex: "100"
        }}>
            {genre.map(value =>
                <div style={{fontSize: "20px"}}><Link to={`/movies/genre/${value.id}`} onClick={() => {
                    setGenresOn(false)
                }}> {value.name}</Link></div>
            )}
        </div>
    );
};

export {GenreBadge};