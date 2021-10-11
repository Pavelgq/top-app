import React from 'react'

import cn from 'classnames'

import {FooterProps} from './Footer.props'
import styles from './Footer.module.css'

export const Footer = ({className, ...props} : FooterProps) : JSX.Element => {
    return (
        <footer className={cn(className, styles.footer)} {...props}>
            <span className={styles.copyright}>OwlTop © 2020 - {(new Date()).getFullYear()} Все права защищены</span>
            <a href='#' className={styles.agreement}>Пользовательское соглашение</a>
            <a href='#' className={styles.privacy}>Политика конфиденциальности</a>
        </footer>
    )
}