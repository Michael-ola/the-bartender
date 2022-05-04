import React, {Fragment} from 'react'
import MediaFrame from '../../../../components/MediaFrame/MediaFrame'
import video1 from '../../../../assets/videos/Untitled3.mp4'
import video2 from '../../../../assets/videos/Untitled2.mp4'
import poster1 from '../../../../assets/images/poster1.png'
import poster2 from '../../../../assets/images/poster2.png'
import Button from '../../../../components/Button/Button'
import classes from './FirstAnimation.module.css'

const FirstAnimation = (props) => {

    const leftVideoStyle=props.state.detailLeftVideo?{
        top:'9%',
        width: '271px',
        height: '440px',
        borderRadius:'54px',
        left:'900px',
        opacity: '1',
        ...props.state.detailBottomVideo?
        {top: '-93%',opacity: '0'}:null
    }:props.state.detailBottomVideo?{
        top: '8.5%',
        width: '271px',
        height: '440px',
        borderRadius:'54px',
        left:'900px',
        opacity: '1'
    }:{top: '20px',left:'510px'}

    const rightVideoStyle=props.state.detailLeftVideo?{
        top:'30%',
        opacity: '0',
        left: '1200px'
    }:props.state.detailBottomVideo?{
        top:'30%',
        opacity: '0',
        left: '1200px'
    }:{top: '20px', left:'700px'}

    const bottomVideoStyle=props.state.detailLeftVideo?{
        bottom:'-130px',
        opacity: '1',
        left:'260px',
        ...props.state.detailBottomVideo?
        {bottom: '8.5%',width: '271px',height: '440px',left:'260px'}:null
    }:props.state.detailBottomVideo?{
        bottom:'-130px',
        opacity: '1',
        left:'260px'
    }:{bottom: '-180px', left:'260px',opacity: '0'}

    const leftTextStyle=props.state.detailLeftVideo?{
        bottom:'140px',
        opacity: '1',
        left:'260px',
        ...props.state.detailBottomVideo?
        {bottom: '100%',opacity: '0'}:null
    }:props.state.detailBottomVideo?{
        bottom:'140px',
        opacity: '1',
        left:'260px'
    }:{bottom: '92px',left:'260px',opacity: '0'}

    const rightTextStyle=props.state.detailBottomVideo?{
        bottom:'-130px',
        opacity: '0',
        right:'260px',
        ...props.state.detailLeftVideo?
        {bottom: '140px',opacity: '1'}:null
    }:props.state.detailLeftVideo?{
        bottom:'-130px',
        opacity: '0',
        right:'260px',
    }:{bottom: '92px',right:'260px',opacity: '0'}

    const buttonStyle=props.state.buttonClicked?
    {transform: 'translateY(-40vh)',opacity: '0'}:{
        transform: 'translateY(-15vh)',
        opacity: '1'
    }
    
    const body=(
        <Fragment>
            <article style={leftTextStyle} className={classes.textContainer}>
                <p className={classes.textHeader}>In your wait, taste the glory</p>
                <p className={classes.textBody}>While you await the arrival of your client, get the wonders of The Bartender in your lips</p>
            </article>

            <MediaFrame style={leftVideoStyle} poster={poster1}
            video={props.state.detailLeftVideo || props.state.detailBottomVideo?video1:''
            }/>

            <MediaFrame style={rightVideoStyle} poster={poster2} video={''}/>

            <MediaFrame style={bottomVideoStyle} poster={poster2}
            video={props.state.detailBottomVideo && props.state.detailLeftVideo?video2:''
            }/>

            <article style={rightTextStyle} className={classes.textContainer}>
                <p className={classes.textHeader}>Discuss business over a glass</p>
                <p className={classes.textBody}>Ever thought of signing off that deal with a great liquor?</p>
            </article>
        </Fragment>
    )

    return (
            <section className={classes.container}>
                <div onMouseOver={props.section1HoverHandler} className={classes.overlay}></div>

                {body}

                <Button style={{ transition: 'all 1s ease-in-out,opacity 0.5s ease-in-out',
                 ...buttonStyle}} clicked={props.buttonClickHandler} readmore>Read more</Button>
            </section>
    )
}

export default FirstAnimation
