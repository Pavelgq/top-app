import React from 'react'
import { TopPageComponentProps } from './TopPageComponent.props'
import styles from './TopPageComponent.module.css'
import { Advantages, Card, Htag, Tag, VacanciesView } from '../../components'
import { TopLevelCategoty } from '../../interfaces/page.interface'

export const TopPageComponent  = ({page, products, firstCategory} : TopPageComponentProps) : JSX.Element => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag='h1'>{page.title}</Htag>
                {products ? 
                <Tag size='m'>{products.length}</Tag> : 
                <Tag size='m'>0</Tag>}
                <span>Сортировка</span>
            </div>
            <div className={styles.products}>
                {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
            </div>
            {firstCategory === TopLevelCategoty.Courses && page.hh &&
                <VacanciesView info={page.hh} category={page.category} />
            }

            {page.advantages && page.advantages.length > 0 && 
                <>
                    <Htag tag='h2'>Преимущества</Htag>
                    <Advantages info={page.advantages} />
                </>
            }
            

             
        </div>

        
    )
}