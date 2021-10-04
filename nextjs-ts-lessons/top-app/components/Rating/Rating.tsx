import React, { useState, useEffect } from 'react';
import { RatingProps } from './Rating.props';

import cn from 'classnames';
import StarIcon from './star.svg';

import styles from './Htag.module.css'

export const Htag = ({isEditable = false, rating, setRating, ...props} : RatingProps) : JSX.Element => {
    
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating)
    }, [rating])

    const constructRating = (currentRating: number) => {
        const newRating = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <StarIcon 
                    
                />
            )
        })
    }
    return (
        <div>

        </div>
    )
}