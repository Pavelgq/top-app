import React from 'react'

import {SidebarProps} from './Sidebar.props'

import Logo from '../logo.svg'
import styles from './Sidebar.module.css'
import { Menu } from '../Menu/Menu'
import cn from 'classnames'
import Link from 'next/link'
import { Search } from '../../components'

export const Sidebar = ({className, ...props} : SidebarProps) : JSX.Element => {
    return (
        <div {...props} className={cn(className, styles.sidebar)}>
            
            <Link href='/'>
                <Logo className={styles.logo}/>
            </Link>
            <Search />
            <Menu />
        </div>
    )
}