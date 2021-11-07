import Image from 'next/image'
import cn from 'classnames'
import {ProductProps} from './Product.props'
import styles from './Product.module.css'
import { Button, Card, HrTag, Htag, Rating, Tag } from '..'
import React from 'react'
import { declinWord, priceToRub } from '../../helpers/otherHelpers'

export const Product = ({product, ...props}: ProductProps): JSX.Element => {

  return (
      <Card className={styles.product} {...props}>
        <div className={styles.logo}>
          <Image 
            src={process.env.NEXT_PUBLIC_DOMAIN?.slice(0, -1) + product.image} 
            alt={product.title}
            width={70}
            height={70}
          />
        </div>
        <div className={styles.title}><Htag tag='h3'>{product.title}</Htag></div>
        <div className={styles.price}>
          <span className={styles.priceWrapper}>
            {priceToRub(product.price)}
            {product.oldPrice && 
              <Tag className={styles.saleTag} color='green' size='s'>{priceToRub(product.price - product.oldPrice)}</Tag>
            }
          </span>
        </div>
        <div className={styles.credit}>{priceToRub(product.credit)}<span className={styles.creditPrefix}>/мес</span></div>
        <div className={styles.rating}><Rating rating={product.initialRating} /></div>
        <div className={styles.tags}>{product.categories.map(t => (<Tag className={styles.categoryTag} key={t} size="s" color='gray'>{t}</Tag>))}</div>
        <div className={styles.priceText}>цена</div>
        <div className={styles.creditText}>в кредит</div>
        <div className={styles.ratingText}>
          {product.reviewCount + ' '} 
          {declinWord(product.reviewCount, ['отзыва','отзыв','отзывов'])}
          </div>
        <HrTag className={styles.line1} />
        <div className={styles.description}>{product.description}</div>
        <div className={styles.character}>
          {product.characteristics.map(c => {
            return (
              <div className={styles.characterItem}>
                <span className={styles.characterName}>{c.name}</span>
                <span className={styles.characterDots}></span>
                <span className={styles.characterValue}>{c.value}</span>
              </div>
            )
          })}
        </div>
        <div className={styles.advBlock}>
          {product.advantages && 
            <div className={styles.advantages}>
              <Htag tag='h4'>Преимущества</Htag>
              {product.advantages}
            </div>
          }
          {product.disadvantages && 
            <div className={styles.disadvantages}>
              <Htag tag='h4'>Недостатки</Htag>
              {product.disadvantages}
            </div>
          }
          
        </div>
        <HrTag className={styles.line2} />

        <div className={styles.control}>
          <Button appearence='primary'>Узнать подробнее</Button>
          <Button appearence='ghost' arrow="right" className={styles.reviewButton}>Читать отзывы</Button>
        </div>
        
      </Card>
  )
}