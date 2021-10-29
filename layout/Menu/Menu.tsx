import React, { useContext } from "react"
import { AppContext } from "../../context/app.context"
import Link from 'next/link'

import cn from 'classnames'

import styles from './Menu.module.css'

import { PageItem, TopLevelMenuItem } from "../../interfaces/menu.interface"

import { useRouter } from "next/dist/client/router"
import { firstLevelMenuItem } from "../../helpers/menuHelpers"


export const Menu = () : JSX.Element => {
    const {menu, setMenu, firstCategory} = useContext(AppContext)
    const router = useRouter()

    const openSecondLevel = (category: string) => {
        setMenu && setMenu(menu.map(m => {
            if (m._id.secondCategory === category) {
                m.isOpened = !m.isOpened
            }
            return m;
        }))
    }


    const buildFirstLevelMenu = () : JSX.Element => {
        return (
            <>
                {firstLevelMenuItem.map(menuItem => (
                    <div key={menuItem.route} >
                        <Link href={`/${menuItem.route}`}>
                            <a>
                                <div className={cn(styles.firstLevelItem, {
                                    [styles.firstLevelItemActive] : menuItem.id === firstCategory
                                })}>
                                    {menuItem.icon}
                                    <span>{menuItem.title}</span>
                                </div>
                            </a>
                        </Link>
                        
                        {menuItem.id === firstCategory && buildSecondLevelMenu(menuItem)}
                    </div>
                    
                ))}
            </>
        )
    }

    const buildSecondLevelMenu = (menuItem : TopLevelMenuItem) : JSX.Element => {
        return (
            <div className={styles.secondLevelBlock}>
                {menu.map(subMenuItem => {
                    if (subMenuItem.pages.map( el => el.alias).includes(router.asPath.split('/')[2])) {
                        subMenuItem.isOpened = true;
                    }
                    return (
                    <div key={subMenuItem._id.secondCategory} >
                        <div className={styles.secondLevelTitle} onClick={() => openSecondLevel(subMenuItem._id.secondCategory)}>
                            {subMenuItem._id.secondCategory}
                        </div>
                        <div className={cn(styles.secondLevelItem, {
                        [styles.secondLevelItemActive] : subMenuItem.isOpened
                    })}>
                            {buildThirdLevelMenu(subMenuItem.pages, menuItem.route)}
                        </div>
                        
                        
                    </div>
                )
                }
                )}
            </div>
        )
    }

    const buildThirdLevelMenu = (pages : PageItem[], route : string) : JSX.Element  => {
        return (
            <div>
                {pages.map(page => {
                    return (
                    <div key={page._id} className={cn(styles.thirdLevelItem, {
                        [styles.thirdLevelItemActive]: `/${route}/${page.alias}` === router.asPath,
                    })}>
                        <Link href={`/${route}/${page.alias}`} >
                            <a>
                                {page.category}
                            </a>
                        </Link>
                    </div>
                )})}
            </div>
        )
    }

    return (
        <div>
            {buildFirstLevelMenu()}
        </div>
    )
}