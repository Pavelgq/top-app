import cn from "classnames"
import styles from './HrTag.module.css'
import { HrTagProps } from "./HrTag.props"

export const HrTag = ({className, ...props}: HrTagProps): JSX.Element => {
  return (
    <hr className={cn(className, styles.hr )} {...props}/>
  )
}