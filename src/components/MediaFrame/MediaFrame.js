import React, { Component } from 'react'
import classes from './MediaFrame.module.css'

export default class MediaFrame extends Component {
    render() {
        const classStyles=[classes.container,this.props.className];
        return (
            <div onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave}
                style={this.props.style} className={classStyles.join(' ')}>
                <video poster={this.props.poster} src={this.props.video} muted autoPlay loop className={classes.video}></video>
            </div>
        )
    }
}
