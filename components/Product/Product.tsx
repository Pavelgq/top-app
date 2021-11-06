
import cn from 'classnames'
import {ProductProps} from './Product.props'
import styles from './Product.module.css'
import { Button, Card, Rating, Tag } from '..'
import React from 'react'

export const Product = ({product, ...props}: ProductProps): JSX.Element => {

  return (
      <Card className={styles.product} {...props}>
        <div className={styles.logo}>
          <img src={process.env.NEXT_PUBLIC_DOMAIN?.slice(0, -1) + product.image} alt={product.title} />
        </div>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.price}>{product.price}<Tag color='green' size='s'>{product.price - product.oldPrice}</Tag></div>
        <div className={styles.credit}>{product.credit}</div>
        <div className={styles.rating}><Rating rating={product.initialRating} /></div>
        <div className={styles.tags}>{product.categories.map(t => (<Tag key={t} size="s" color='gray'>{t}</Tag>))}</div>
        <div className={styles.priceText}>цена</div>
        <div className={styles.creditText}>в кредит</div>
        <div className={styles.ratingText}>{product.reviewCount} отзывов</div>
        <div className={styles.line}><hr /></div>
        <div className={styles.description}>{product.description}</div>
        <div className={styles.character}>{0}</div>
        <div className={styles.advBlock}>
            {product.advantages}
            {product.disadvantages}
        </div>
        <div className={styles.line}><hr /></div>

        <div className={styles.control}>
          <Button appearence='primary'>Узнать подробнее</Button>
          <Button appearence='ghost' arrow="right">Читать отзывы</Button>
        </div>
        
      </Card>
  )
}