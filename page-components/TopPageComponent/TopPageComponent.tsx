import React from 'react'
import { TopPageComponentProps } from './TopPageComponent.props'


export const TopPageComponent  = ({page, products} : TopPageComponentProps) : JSX.Element => {

    return (
        <div>
             {products && products.length}
        </div>
    )
}