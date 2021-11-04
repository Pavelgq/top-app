import React from "react";
import { AdvantagesProps } from "./Advantages.props";
import CheckIcon from "./check.svg";

import styles from "./Advantages.module.css"

export const Advantages = ({info}: AdvantagesProps): JSX.Element => {
    return (
        <div>
            <ul className={styles.list}>
                {info.map(a => {
                    return (<li key={a._id} className={styles.item}>
                        <div className={styles.icon}><CheckIcon /></div>
                        <span className={styles.title}>{a.title}</span>
                        <hr className={styles.vline} />
                        <p className={styles.desctiption}>{a.description}</p>
                    </li>)
                })}
            </ul>
        </div>
        
    )
}