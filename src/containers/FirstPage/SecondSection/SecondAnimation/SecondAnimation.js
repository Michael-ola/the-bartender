import React, { Component } from 'react'
import MediaFrame from '../../../../components/MediaFrame/MediaFrame'
import image2 from '../../../../assets/images/image2.jpg'
import image3 from '../../../../assets/images/image3.jpg'
import image4 from '../../../../assets/images/image4.jpg'
import image5 from '../../../../assets/images/image5.jpg'
import image6 from '../../../../assets/images/image6.jpg'
import image7 from '../../../../assets/images/image7.jpg'
import image8 from '../../../../assets/images/image8.jpg'
import image9 from '../../../../assets/images/image9.jpg'
import logoImage from '../../../../assets/images/LogoDesign.png'
import Logo from '../../../../components/Logo/Logo'
import classes from './SecondAnimation.module.css'



export default class SecondAnimation extends Component {
    state={
        showVodkaDrinks:true,
        showWhiskeyDrinks:false,
        showJackDanielDrinks:false
    }

    mouseEnterHandler=(type)=>{
        const list=['Vodka','Whiskey','JackDaniel'];
        
        list.forEach((drinkType)=>{
            const stateWord=`show${drinkType}Drinks`
            if(drinkType===type){
                this.setState({[`${stateWord}`]:true})
            }
            else{
                this.setState({[`${stateWord}`]:false})
            }
        }) 
    }

    render() {

        const borderStyle={
            ...this.state.showVodkaDrinks?{border:'1px solid #12577B'}:null,
            ...this.state.showWhiskeyDrinks?{border:'1px solid #7B5812'}:null,
            ...this.state.showJackDanielDrinks?{border:'1px solid #fff'}:null
        }

        const drinkTypeStyle=(type)=>{
            const stateWord=`show${type}Drinks`
            const sizeStyle=[classes.drinkType,this.state[stateWord]?'':classes.scale]
            return sizeStyle.join(' ');
        }

        const drinkTypesContainer=(
        <div style={{...this.props.state.buttonClicked?
            {transform: 'translateY(-10vh)', opacity: '1'}:{transform: 'translateY(15vh)',opacity: '0'}}}
            className={classes.drinkTypesContainer}>

            <MediaFrame style={{...this.state.showVodkaDrinks?borderStyle:null,bottom:'15%'}} 
             onMouseEnter={()=>this.mouseEnterHandler('Vodka')} className={drinkTypeStyle('Vodka')} 
             poster={image2}
            />

            <MediaFrame style={{...this.state.showWhiskeyDrinks?borderStyle:null}} 
             onMouseEnter={()=>this.mouseEnterHandler('Whiskey')}
             className={drinkTypeStyle('Whiskey')} poster={image5}
            />

            <MediaFrame style={{...this.state.showJackDanielDrinks?borderStyle:null,bottom:'15%'}} 
             onMouseEnter={()=>this.mouseEnterHandler('JackDaniel')} className={drinkTypeStyle('JackDaniel')} 
             poster={image3}
            />
        </div>)
        
        const drinkTextContainer=(
        <div style={{...this.props.state.buttonClicked?
            {
                bottom:'58%', opacity: '1',...this.state.showVodkaDrinks?{bottom:'54%'}:
                this.state.showWhiskeyDrinks?{bottom:'46%'}:this.state.showJackDanielDrinks?{bottom:'53%'}:null
            }:null }} 
            className={classes.drinkTextContainer}>

            <div className={classes.drinkText}>{
                this.state.showVodkaDrinks?'Vodka':
                this.state.showWhiskeyDrinks?'Whiskey':
                this.state.showJackDanielDrinks?'Jack Daniel\'s Whiskey':''
            }</div>
        </div>)

        const drinks=(type)=>{
            switch(type) {
                case('Vodka'):
                return (<div className={[classes.drinksContainer, this.props.state.buttonClicked?classes.drinksContainer:null].join(' ')}>
                    <MediaFrame className={[classes.drink,classes.fadeUp].join(' ')} poster={image4}/>
                    <MediaFrame className={[classes.drink,classes.fadeDown].join(' ')}  poster={image8}/>
                    <MediaFrame className={[classes.drink,classes.fadeUp].join(' ')}  poster={image2}/>
                    <MediaFrame className={[classes.drink,classes.fadeDown].join(' ')}  poster={image3}/>
                    <MediaFrame className={[classes.drink,classes.fadeUp].join(' ')}  poster={image5}/>
                </div>)
                case('Whiskey'):
                return (<div className={[classes.drinksContainer, this.props.state.buttonClicked?classes.drinksContainer:null].join(' ')}>
                    <MediaFrame className={[classes.drink,classes.fadeDown].join(' ')} poster={image7}/>
                    <MediaFrame className={[classes.drink,classes.fadeUp].join(' ')} poster={image6}/>
                    <MediaFrame className={[classes.drink,classes.fadeDown].join(' ')} poster={image9}/>
                    <MediaFrame className={[classes.drink,classes.fadeUp].join(' ')} poster={image5}/>
                    <MediaFrame className={[classes.drink,classes.fadeDown].join(' ')} poster={image6}/>
                </div>)
                case('JackDaniel'):
                return (<div className={[classes.drinksContainer, this.props.state.buttonClicked?classes.drinksContainer:null].join(' ')}>
                    <MediaFrame className={classes.drink}poster={image5}/>
                    <MediaFrame className={[classes.drink,classes.fadeUpVariant].join(' ')} poster={image9}/>
                    <MediaFrame className={classes.drink} poster={image3}/>
                    <MediaFrame className={[classes.drink,classes.fadeUpVariant].join(' ')} poster={image4}/>
                    <MediaFrame className={classes.drink} poster={image7}/>
                </div>)
                default: 
                return null
            }
          
        }

        return (
            <section style={{...this.props.state.buttonClicked?{height:'160%'}:null}} className={classes.container}>
              
                {drinkTypesContainer}
                
                {drinkTextContainer}
                
                {  
                    this.props.state.buttonClicked?(
                    this.state.showVodkaDrinks?drinks('Vodka'):
                    this.state.showWhiskeyDrinks?drinks('Whiskey'):
                    this.state.showJackDanielDrinks?drinks('JackDaniel'):null)
                    :null
                }

                <Logo url={logoImage} className={classes.logo}></Logo>
            </section>
        )
    }
}

