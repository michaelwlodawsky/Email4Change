import React from 'react'
import styles from './custom.module.css'

export default function ToolTip({children, text}) {
    const [show, setShow] = React.useState(false)

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row', 
        }}>
            <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                {children}
            </div>
            <div className={styles.tooltip} style={show ? {display: 'flex', order: '1000'} : {}}>
                {text}
            </div>
            
        </div>
    )
}