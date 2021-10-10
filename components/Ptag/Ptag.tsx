import React from 'react';

import cn from 'classnames';
import {PtagProps} from './Ptag.props';
import styles from './Ptag.module.css';

export const Ptag = ({size = 'm', children} : PtagProps) : JSX.Element => {
    switch (size) {
        case 's':
            return <p className={styles.s}>{children}</p>
        case 'm':
            return <p className={styles.m}>{children}</p>
        case 'l':
            return <p className={styles.l}>{children}</p>
        default:
            return <></>
    }

}