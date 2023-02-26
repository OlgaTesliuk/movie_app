import React from 'react';

const PosterPreview = ({poster_path}) => {
    let image = `https://image.tmdb.org/t/p/w200/${poster_path}`
    return (
        <div>
            <img src={image} alt="image"/>
        </div>
    );
};

export {PosterPreview};