import React, { Component, Fragment} from 'react'
import classes from './TextDisplay.module.css'

export default class textDisplay extends Component {
    state={
        showOther:false,
        fade:false
    }
    fadeUpHandler=()=>{
        this.setState({fade:false})
    }
    fadeDownHandler=()=>{
        this.setState({fade:true})
    }
    showOtherHandler=()=>{
        this.setState({showOther:true})
    }
    render() {
        const style1=[classes.textContainer,this.state.showOther?this.state.fade?classes.fadeDown1:classes.fadeUp1:null]
        const style2=[classes.textContainer,this.state.showOther?this.state.fade?classes.fadeDown2:classes.fadeUp2:null]

        return (
            <div  className={classes.container}>
                <div onMouseOver={()=>{this.showOtherHandler();this.fadeUpHandler()}} className={style1.join(' ')}>
                    <p style={{margin:'9px'}}>Drinking is Just</p>
                    <p style={{margin:'9px'}}>Plain FUN</p>  
                </div>
    
                <div style={{opacity:'0'}}  onMouseOver={()=>{this.showOtherHandler();this.fadeDownHandler()}} className={style2.join(' ')}>
                    <p style={{margin:'9px'}}>Spend every '$' on a</p> 
                    <p style={{margin:'9px'}}>Bottle</p>
                </div>  
            </div> 
        )
    }
}
