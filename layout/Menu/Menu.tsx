import React, { useContext } from "react"
import { AppContext } from "../../context/app.context"
import Link from 'next/link'

import cn from 'classnames'

import styles from './Menu.module.css'

import { PageItem, TopLevelMenuItem } from "../../interfaces/menu.interface"
import { TopLevelCategoty } from "../../interfaces/page.interface"

import CoursesIcon from './icons/Courses.svg'
import BooksIcon from './icons/Books.svg'
import ServicesIcon from './icons/Services.svg'
import ProductsIcon from './icons/Products.svg'
import { useRouter } from "next/dist/client/router"

const firstLevelMenuItem : TopLevelMenuItem[] = [
    {route: 'courses', title: 'Курсы', icon: <CoursesIcon/>, id: TopLevelCategoty.Courses},
    {route: 'books', title: 'Книги', icon: <BooksIcon/>, id: TopLevelCategoty.Books},
    {route: 'services', title: 'Сервисы', icon: <ServicesIcon/>, id: TopLevelCategoty.Services},
    {route: 'products', title: 'Продукты', icon: <ProductsIcon/>, id: TopLevelCategoty.Products}
]

export const Menu = () : JSX.Element => {
    const {menu, setMenu, firstCategory} = useContext(AppContext)
    const router = useRouter()

    const buildFirstLevelMenu = () : JSX.Element => {
        return (
            <>
                {firstLevelMenuItem.map(menuItem => (
                    <div key={menuItem.route}>
                        <Link href={`/${menuItem.route}`}>
                            <a>
                                <div className={cn(styles.firstLevelItem, {
                                    [styles.firstLevelItemActive] : menuItem.id == firstCategory
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
                        <div className={styles.secondLevelTitle}>
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