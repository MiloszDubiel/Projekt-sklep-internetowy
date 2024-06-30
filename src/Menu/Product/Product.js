import React from "react";
import styles from './Product.module.css'
const product = props =>{
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
                <p>{props.ilosc}</p>
            </div>
            <div className={styles.price}>
                <p className={styles.header}>Cena:</p>
               <p>{props.price}</p>     
            </div>
            <div className={styles.delete}>
                <button onClick={()=> props.delete(props.index)}>X</button>
            </div>
        </div>
    )
}

export default product;
