import React, { useContext } from "react"
import { AppContext } from "../../context/app.context"
import { TopLevelMenuItem } from "../../interfaces/menu.interface"
import { TopLevelCategoty } from "../../interfaces/page.interface"

import CoursesIcon from './icons/Courses.svg'
import BooksIcon from './icons/Books.svg'
import ServicesIcon from './icons/Services.svg'
import ProductsIcon from './icons/Products.svg'

const firstLevelMenuItem : TopLevelMenuItem[] = [
    {route: 'Courses', title: 'Курсы', icon: <CoursesIcon/>, id: TopLevelCategoty.Courses},
    {route: 'Books', title: 'Книги', icon: <BooksIcon/>, id: TopLevelCategoty.Books},
    {route: 'Services', title: 'Сервисы', icon: <ServicesIcon/>, id: TopLevelCategoty.Services},
    {route: 'Products', title: 'Продукты', icon: <ProductsIcon/>, id: TopLevelCategoty.Products}
]

export const Menu = () => {
    const {menu, setMenu, firstCategory} = useContext(AppContext)

    return (
        <div>
            <ul>
                {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
            </ul>
        </div>
    )
}