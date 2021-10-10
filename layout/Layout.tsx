import React, { Component, FunctionComponent } from 'react'

import {LayoutProps} from './Layout.prors'
import styles from './Layout.module.css'
import { Header } from './Header/Header'
import { Sidebar } from './Sidebar/Sidebar'
import { Footer } from './Footer/Footer'

export const Layout = ({children} : LayoutProps) : JSX.Element => {
    return (
        <>
            <Header/>
            <div>
                <Sidebar/>
                <div>
                    {children}
                </div>
            </div>
            <Footer/>
        </>
    )
}


export const withLayout = <T extends Record<string, unknown>> (Component : FunctionComponent<T>) => {
    return function componentWithLayout ({...props} : T) : JSX.Element {
        return (
            <Layout>
                <Component {...props}/>
            </Layout>
        )
    } 
}