import React from "react";
import styles from './ResponsData.module.css'
const responsData = props =>{
    return(
        <div className={styles.prodcuts}>
            <div className={styles.picture}>
                <img src={props.picture} />
            </div>
            <div className={styles.name}>
                <p className={styles.header}>{props.name}</p>
            </div>
            <div className={styles.quantity}>
                <p className={styles.header}>Ilość:</p>
                <p>{props.quantity}</p>
            </div>
            <div className={styles.price}>
                <p className={styles.header}>Cena:</p>
               <p>{props.price}</p>     
            </div>
            <div className={styles.price}>
                <p className={styles.header}>Data zakupu</p>
               <p>{props.date}</p>     
            </div>
        </div>
    )
}

export default responsData;
