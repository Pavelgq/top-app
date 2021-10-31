import React from 'react'

import {SidebarProps} from './Sidebar.props'

import Logo from '../logo.svg'
import styles from './Sidebar.module.css'
import { Menu } from '../Menu/Menu'
import cn from 'classnames'

export const Sidebar = ({className, ...props} : SidebarProps) : JSX.Element => {
    return (
        <div {...props} className={cn(className, styles.sidebar)}>
            <Logo className={styles.logo}/>
            Поиск
            <Menu />
        </div>
    )
}