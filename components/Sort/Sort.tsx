import { SortEnam, SortProps } from "./Sort.props"

import cn from "classnames"

import styles from "./Sort.module.css"
import SortIcon from "./sort.svg"

export const Sort = ({sort, setSort, className, ...props}: SortProps): JSX.Element => {

  return (
    <div className={cn(styles.sort, className)} {...props}>
      <span 
        onClick={() => setSort(SortEnam.Rating)}
        className={cn({
          [styles.active] : sort == SortEnam.Rating
          })}
      >
        <SortIcon className={styles.icon} />
        <span className={styles.item}>По&nbsp;рейтингу</span>
      </span>
      
      <span 
        onClick={() => setSort(SortEnam.Price)}
        className={cn({
          [styles.active] : sort == SortEnam.Price
          })}
      >
        <SortIcon className={styles.icon} />
        <span className={styles.item}>По&nbsp;цене</span>
      </span>
    </div>
  )
}