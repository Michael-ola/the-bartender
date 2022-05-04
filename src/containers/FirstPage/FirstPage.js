import React, {Component} from 'react'
import classes from './FirstPage.module.css'
import FirstSection from './FirstSection/FirstSection'
import SecondSection from './SecondSection/SecondSection'

export default class FirstPage extends Component {
   
    render() {
        return (
            <main className={classes.container}>
                <FirstSection/>
                <SecondSection/>
            </main>
        )
    }
}
