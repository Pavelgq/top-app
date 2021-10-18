import React, { useContext } from "react"
import { AppContext } from "../../context/app.context"

import cn from 'classnames'

import styles from './Menu.module.css'

import { PageItem, TopLevelMenuItem } from "../../interfaces/menu.interface"
import { TopLevelCategoty } from "../../interfaces/page.interface"

import CoursesIcon from './icons/Courses.svg'
import BooksIcon from './icons/Books.svg'
import ServicesIcon from './icons/Services.svg'
import ProductsIcon from './icons/Products.svg'

const firstLevelMenuItem : TopLevelMenuItem[] = [
    {route: 'courses', title: 'Курсы', icon: <CoursesIcon/>, id: TopLevelCategoty.Courses},
    {route: 'books', title: 'Книги', icon: <BooksIcon/>, id: TopLevelCategoty.Books},
    {route: 'services', title: 'Сервисы', icon: <ServicesIcon/>, id: TopLevelCategoty.Services},
    {route: 'products', title: 'Продукты', icon: <ProductsIcon/>, id: TopLevelCategoty.Products}
]

export const Menu = () : JSX.Element => {
    const {menu, setMenu, firstCategory} = useContext(AppContext)


    const buildFirstLevelMenu = () : JSX.Element => {
        return (
            <div>
                {firstLevelMenuItem.map(menuItem => (
                    //Изучить API (структура переходов)
                    <div key={menuItem.route}>
                        <a href={`/${menuItem.route}`} >
                            <div className={cn(styles.firstLevelItem, {
                                [styles.firstLevelItemActive] : menuItem.id == firstCategory
                            })}>
                                {menuItem.icon}
                                <span>{menuItem.title}</span>
                            </div>
                        </a>
                        {menuItem.id === firstCategory && buildSecondLevelMenu(menuItem)}
                    </div>
                    
                ))}
            </div>
        )
    }

    const buildSecondLevelMenu = (menuItem : TopLevelMenuItem) : JSX.Element => {
        return (
            <div>
                {menu.map(subMenuItem => (
                    <div key={subMenuItem._id.secondCategory}>
                        {subMenuItem._id.secondCategory}
                        {buildThirdLevelMenu(subMenuItem.pages, menuItem.route)}
                    </div>
                ))}
            </div>
        )
    }

    const buildThirdLevelMenu = (pages : PageItem[], route : string) : JSX.Element  => {
        return (
            <div>
                {pages.map(page => (
                    <div key={page._id}>
                        <a href={`/${route}/${page.alias}`}>
                            {page.category}
                        </a>
                        
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div>
            {buildFirstLevelMenu()}
        </div>
    )
}