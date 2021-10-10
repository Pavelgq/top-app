import React from 'react';

import cn from 'classnames';
import {PtagProps} from './Ptag.props';
import styles from './Ptag.module.css';

export const Ptag = ({size = 'm', children, ...prors} : PtagProps) : JSX.Element => {
    return (
        <p 
        className={
            cn(styles.p, styles[size])
        } {...prors}>
            {children}
        </p>
    )

}