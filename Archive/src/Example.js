import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tooltip from './Tooltip';
import styles from './example.css';
import { CSSTransitionGroup } from 'react-transition-group';
const imageurl = '../assets/avatar.png'

export default class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cta: true,
            social: ['Twitter', 'Facebook', 'Google+'],
            backgroundColor: '#fcdbb5',
        }
    }

    showTooltip() {
        setTimeout(()=> {this.setState({ tooltipVisible: true})}, 1500)
    }
    twitter() {
        setTimeout(()=> {this.setState({ twitterTooltip: true})}, 1500)
    }
    facebook() {
        setTimeout(()=> {this.setState({ facebookTooltip: true})}, 1500)
    }
    google() {
        setTimeout(()=> {this.setState({ googleTooltip: true})}, 1500)
    }
    showTrigger() {
        setTimeout(()=> {this.setState({ triggerTooltip: true})}, 1500)
    }

    showTooltipOnClick() {
        if (!this.state.tooltipVisible) {
            this.setState({ tooltipVisible: true })
        }
    }
    twitterOnClick() {
        if (!this.state.twitterTooltip) {
            this.setState({ twitterTooltip: true })
        }
    }
    facebookOnClick() {
        if (!this.state.facebookTooltip) {
            this.setState({ facebookTooltip: true })
        }
    }
    googleOnClick() {
        if (!this.state.googleTooltip) {
            this.setState({ googleTooltip: true })
        }
    }
    showTriggerOnClick() {
        if (!this.state.triggerTooltip) {
            this.setState({ triggerTooltip: true })
        }
    }
    
render() {
    return (
    <div className={styles.container}>
        <div className={styles.banner}>
            <div className={styles.bannerIconContainer}>
                <div className={styles.twitterContainer}>
                    <img 
                        src={require('/Users/hallemi/Downloads/Tooltip_React_task/src/assets/twitter.png')} 
                        alt="twitter" 
                        className={styles.social} 
                        onClick={()=> this.twitterOnClick() }
                    />
                    <div className={styles.twitterHack}>
                        <Tooltip 
                            text={this.state.social[0]}
                            backgroundColor={this.state.backgroundColor} 
                        /> 
                    </div>
                </div>
                <div className={styles.facebookContainer}>
                    <img src={require('/Users/hallemi/Downloads/Tooltip_React_task/src/assets/facebook.png')} 
                        alt="facebook" 
                        className={styles.social} 
                        onClick={()=> this.facebookOnClick() } 
                    />
                    <div className={styles.twitterHack}>
                        <Tooltip 
                            text={this.state.social[1]}
                            backgroundColor={this.state.backgroundColor} 
                        /> 
                    </div>
                </div>
                <div className={styles.googleContainer}>
                    <img 
                        src={require('/Users/hallemi/Downloads/Tooltip_React_task/src/assets/google.png')} 
                        alt="google+" className={styles.social} 
                        onClick={()=> this.googleOnClick() } 
                    />
                    <div className={styles.twitterHack}>
                        <Tooltip 
                            text={this.state.social[2]}
                            backgroundColor={this.state.backgroundColor} 
                        /> 
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.commentBox}>
            <div className={styles.commentcontainer}>
                <div className={styles.imageContainer}>
                    <img 
                        src={require('/Users/hallemi/Downloads/Tooltip_React_task/src/assets/avatar.png')} 
                        alt="man avatar" 
                        className={styles.avatar} 
                    />
                        <Tooltip
                            cta={this.state.cta}
                            title={'Ed Edison'}
                            paragraph={'A life lover from nyc'}
                            buttonText={'Follow'}
                            backgroundColor={this.state.backgroundColor} 
                            image={require('/Users/hallemi/Downloads/Tooltip_React_task/src/assets/avatar.png')}
                        />
                </div>
                    <div className={styles.name}>Ed Edison</div>
                    <div className={styles.timestamp}>Aug 29 1 min read</div>
                <div className={styles.comment}>
                        This is definitely a clean solution! One thing bugged me though. 
                        Since you are already using class properties (state = {} straight instead of inside constructor), why not use <span className={styles.trigger}>arrow functions 
                        <div className={styles.triggerHover}>
                        <Tooltip 
                            backgroundColor={this.state.backgroundColor} 
                            text={'Arrow functions bind the context statically on declaration, rendering the lexical "this" unnecessary'} 
                        /> 
                        </div>
                    </span> to eliminate need for binding this?
                </div>
            </div>
        </div>
    </div>
    );
}
}