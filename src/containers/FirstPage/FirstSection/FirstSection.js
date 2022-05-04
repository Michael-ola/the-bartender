import React, { Component} from 'react'
import classes from './FirstSection.module.css'
import image1 from '../../../assets/images/image1.png'
import video1 from '../../../assets/videos/Untitled.mp4'
import logoImage from '../../../assets/images/LogoDesign.png'
import TextDisplay from '../../TextDisplay/TextDisplay'
import Logo from '../../../components/Logo/Logo'

export default class FirstSection extends Component {
    state={
        showVideo:true
    }
    render() {
        const styles={
            background:`url(${image1})`,
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            objectFit:'cover'
        };

        ((time)=>{
            setTimeout(()=>this.setState({showVideo:false}),time)
        })(15000);

        return (
            <section className={classes.container}>
                {
                    this.state.showVideo?<video className={classes.mediaContainer}
                    src={video1} autoPlay loop muted></video>:
                    <div style={styles} className={classes.mediaContainer}></div>
                } 
                <Logo url={logoImage} className={classes.logo}></Logo>
                <div className={classes.backgroundCover1}></div>
                <div className={classes.backgroundCover2}></div>
                <TextDisplay/>
            </section>
        )
    }
}
