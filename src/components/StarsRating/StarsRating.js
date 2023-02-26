import React from 'react';
import StarRatings from "react-star-ratings/build/star-ratings";


const StarsRating = ({vote_average}) => {
    return (
        <div>
            <StarRatings
                rating={vote_average / 2}
                starRatedColor="golden"
                numberOfStars={5}
                name='rating'

            />
        </div>
    );
};

export {StarsRating};