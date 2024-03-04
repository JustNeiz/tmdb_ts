import StarRatings from "react-star-ratings/build/star-ratings";

import css from './StarRating.module.css'
import {FC} from "react";
interface Props {
    rating: number
}
const StarRating : FC<Props> = ({rating}) => {
    return <div className={css.StarRating}>

        <StarRatings
            rating={rating}
            starRatedColor="gold"
            numberOfStars={10}
            name='rating'
            starDimension={'15px'}
            starSpacing={'0px'}
        />

    </div>
};

export default StarRating;