import React, {PureComponent} from 'react'
import classes from './Navbar.module.css'
import Button from '../Button/Button'


class Navbar extends PureComponent {
    render() {
        return (
          <nav className={classes.container}>
            <ul className={classes.listContainer}>
                <li style={{color: '#fff',fontWeight:'bold'}} className={classes.navItem}>Home</li>
                <li className={classes.navItem}>Counter</li>
                <li className={classes.navItem}>Product</li>
                <li style={{minWidth:'106px'}} className={classes.navItem}>Contact Us</li>
            </ul>
            <Button couponButton>Have Coupon</Button>
            <Button buyButton>Buy Now</Button>
          </nav>
        )
    }
}

export default Navbar
