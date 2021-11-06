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
                <a>
                    <Logo className={styles.logo}/>
                </a>
            </Link>
            <Search />
            <Menu />
        </div>
    )
}