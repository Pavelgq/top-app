import React from 'react'
import { VacanciesViewProps } from './VacanciesView.props'
import styles from './VacanciesView.module.css'
import StarIcon from './starIcon.svg'
import { Htag, Card, Tag } from '..'
import { priceToRub } from '../../helpers/otherHelpers'
 
export const VacanciesView = ({category, info}: VacanciesViewProps): JSX.Element => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag='h2'>Вакансии - {category}</Htag>
                <Tag size='m' color='red'>hh.ru</Tag>
            </div>
            <div className={styles.info}>
                <Card color="white" className={styles.countCard}>
                    <span className={styles.subTitle}>Всего вакансий</span>
                    <span className={styles.count}>{info.count}</span>
                </Card>

                <Card color="white" className={styles.salary}>
                    <div>
                        <span className={styles.subTitle}>Начинающий</span>
                        <span className={styles.salaryValue}>{priceToRub(info.juniorSalary)}</span>
                        <div className={styles.stars}>
                            <StarIcon className={styles.starFilled}/>
                            <StarIcon />
                            <StarIcon />
                        </div>
                    </div>
                    <div>
                        <span className={styles.subTitle}>Средний</span>
                        <span className={styles.salaryValue}>{priceToRub(info.middleSalary)}</span>
                        <div className={styles.stars}>
                            <StarIcon className={styles.starFilled}/>
                            <StarIcon className={styles.starFilled}/>
                            <StarIcon />
                        </div>
                    </div>
                    <div>
                        <span className={styles.subTitle}>Профессионал</span>
                        <span className={styles.salaryValue}>{priceToRub(info.seniorSalary)}</span>
                        <div className={styles.stars}>
                            <StarIcon className={styles.starFilled}/>
                            <StarIcon className={styles.starFilled}/>
                            <StarIcon className={styles.starFilled}/>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}
