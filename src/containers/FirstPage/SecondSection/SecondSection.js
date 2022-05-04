import React, { Component } from 'react'
import classes from './SecondSection.module.css'
import FirstAnimation from './FirstAnimation/FirstAnimation'
import SecondAnimation from './SecondAnimation/SecondAnimation'

export default class SecondSection extends Component {
    state={
        buttonClicked:false,
        detailLeftVideo:false,
        detailBottomVideo:false
    }

    detailLeftVideoHandler=() => {
        this.setState((prevState)=>{
            return {detailLeftVideo:!prevState.detailLeftVideo}
        })
    }

    buttonClickHandler=() => {
        this.setState({buttonClicked:true})
        this.setState({detailBottomVideo:true})
        this.setState({detailLeftVideo:false})
        this.detailLeftVideoHandler();
    }

    section1HoverHandler=() => {
        this.detailLeftVideoHandler();
        this.setState({buttonClicked:false})
    }

    render() {
        return (
           <main  className={classes.container}>
               <FirstAnimation state={this.state} section1HoverHandler={this.section1HoverHandler}
                buttonClickHandler={this.buttonClickHandler} detailLeftVideoHandler={this.detailLeftVideoHandler}/>

               <SecondAnimation state={this.state} />
           </main>
        )
    }
}
