import React, { useEffect, useReducer } from 'react'
import { TopPageComponentProps } from './TopPageComponent.props'
import styles from './TopPageComponent.module.css'
import { Advantages, Card, Htag, Ptag, Sort, Tag, VacanciesView } from '../../components'
import { TopLevelCategoty } from '../../interfaces/page.interface'
import { SortReduser } from './sort.reducer'
import { SortEnam } from '../../components/Sort/Sort.props'
import { Product } from '../../components/Product/Product'

export const TopPageComponent  = ({page, products, firstCategory} : TopPageComponentProps) : JSX.Element => {

    const [{products: sortedProducts, sort}, dispatchSort] = useReducer(SortReduser, {products, sort: SortEnam.Rating});

    const setSort = (targetSort: SortEnam) => {
        dispatchSort({type: targetSort});
    }

    useEffect(() => {
        dispatchSort({type: 'Reset', initialState: products})
    }, [products])

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag='h1'>{page.title}</Htag>
                {products ? 
                <Tag size='m'>{products.length}</Tag> : 
                <Tag size='m'>0</Tag>}
                <Sort sort={sort} setSort={setSort} />
            </div>
            <div className={styles.products}>
                {sortedProducts && sortedProducts.map(p => (<Product key={p._id} product={p} />))}
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
                            <Tag key={t} size="s" color='primary'>{t}</Tag>
                        )
                    })}
                </div>
                
            </div>
             
        </div>

        
    )
}

