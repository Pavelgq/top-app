import React, { useState, useEffect, KeyboardEvent } from 'react';
import { RatingProps } from './Rating.props';

import cn from 'classnames';
import StarIcon from './star.svg';

import styles from './Rating.module.css'

export const Rating = ({isEditable = false, rating, setRating, ...props} : RatingProps) : JSX.Element => {
    
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating)
    }, [rating])

    
    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return
        }
        constructRating(i)
    }
    const onClick = (i: number) => {
        if (!isEditable || !setRating) {
            return
        }
        setRating(i + 1);
    }

    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
        if (e.code != 'Space' || !setRating) {
            return
        }
        setRating(i)
    }

    const constructRating = (currentRating: number) => {
        const newRating = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <span
                    className={cn(styles.star, {
                                [styles.fill]: i < currentRating,
                                [styles.edited]: isEditable
                            })
                        }
                        onMouseEnter={() => changeDisplay(i + 1)}
                        onMouseLeave={() => changeDisplay(rating)}
                        onClick={() => onClick(i)}
                >
                    <StarIcon 
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
                    />
                </span>
                
            )
        })
        setRatingArray(newRating);
    }

    return (
        <div className={styles.wrapper} {...props}>
            {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
        </div>
    )
}