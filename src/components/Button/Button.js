import React from 'react'
import classes from './Button.module.css'

const Button = (props) => {
    const styles=[
        classes.container,props.buyButton && classes.buyButton,
        props.couponButton && classes.couponButton,
        props.readmore && classes.readMoreButton
    ]
    return (
        <div onClick={props.clicked} style={props.style} className={styles.join(' ')}><span style={{cursor: 'pointer'}} >{props.children}</span></div>
    )
}

export default React.memo(Button)
