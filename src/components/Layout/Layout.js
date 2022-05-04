import React, {Component} from 'react'
import classes from './Layout.module.css'
import NavBar from '../Navbar/Navbar'
import FirstPage from '../../containers/FirstPage/FirstPage'
import webFont from 'webfontloader'

class Layout extends Component {

    componentDidMount(){
        webFont.load({
            google:{
                families:['Montserrat Alternates','open sans']
            }
        })
    }

   render() {
    return (
        <main className={classes.container}>
            <header className={classes.navContainer}>
                <NavBar/>
            </header>
            <section className={classes.pageContainer}>
                <FirstPage/>
            </section>
        </main>
    )
   }
}

export default Layout
