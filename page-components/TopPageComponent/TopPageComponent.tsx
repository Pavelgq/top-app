import React from 'react'
import { TopPageComponentProps } from './TopPageComponent.props'
import styles from './TopPageComponent.module.css'
import { Advantages, Card, Htag, Ptag, Tag, VacanciesView } from '../../components'
import { TopLevelCategoty } from '../../interfaces/page.interface'
import { Sort } from '../../components/Sort/Sort'
import { SortEnam } from '../../components/Sort/Sort.props'

export const TopPageComponent  = ({page, products, firstCategory} : TopPageComponentProps) : JSX.Element => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag='h1'>{page.title}</Htag>
                {products ? 
                <Tag size='m'>{products.length}</Tag> : 
                <Tag size='m'>0</Tag>}
                <Sort sort={SortEnam.Rating} setSort={() => {}} />
            </div>
            <div className={styles.products}>
                {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
            </div>
            {firstCategory === TopLevelCategoty.Courses && page.hh &&
                <VacanciesView info={page.hh} category={page.category} />
            }

            {page.advantages && page.advantages.length > 0 && 
                <div className={styles.chapter}>
                    <Htag tag='h2'>Преимущества</Htag>
                    <Advantages info={page.advantages} />
                </div>
            }

            {page.seoText && 
                <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}} />
            }
            
            <div className={styles.chapter}>
                <Htag tag="h2">Получаемые навыки</Htag>
                <div className={styles.tags}>
                    {page.tags && page.tags.map(t => {
                        return (
                            <Tag size="s" color='primary'>{t}</Tag>
                        )
                    })}
                </div>
                
            </div>
             
        </div>

        
    )
}