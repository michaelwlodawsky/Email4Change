import React from 'react';
import styles from './custom.module.css';

const MODAL = "modal"



export default function LinkModal({style, toggle, link}) {
    console.log(style)

    const dismiss = () => {
        toggle(styles.dismiss)
    }  

    return (
        <div
            id={MODAL}
            className={style}>
                <div 
                    className={styles.innerModal}>
                        <h1
                            style={{
                                textAlign: 'center'
                            }}>
                            Here is your link!</h1>
                        <h3>{link}</h3>
                        <button onClick={dismiss}>
                            Close
                        </button>
                </div>
        </div>
    )
}