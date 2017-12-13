
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import css from './Tooltip.css';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export default class Tooltip extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired
  }
  constructor(props) {
    super(props);
  }

  render() {
    const { children, title, text, paragraph, image, cta, buttonText } = this.props;

    return (

      <div>
        <div className={css.body} style={{backgroundColor: this.props.backgroundColor}}>
            <div className={css.text}>{this.props.text}</div>
            <div className={css.wrapper}>
              <div className={css.titlewrap}>
                {this.props.title ? <div className={css.title}>{this.props.title}</div>: null }
                {this.props.paragraph ? <div className={css.paragraph}>{this.props.paragraph}</div>: null }
              </div>
                  {this.props.image && this.props.cta ?
                <div className={css.avatarContainer}>
                  <span>
                    <img 
                      src={this.props.image} 
                      alt="man avatar" 
                      className={css.avatar} 
                    />
                  </span>
                  <span> <button className={css.button}>{this.props.buttonText}</button> </span>
                </div>
                : null }
            </div>
        </div>
      </div>
    )
  }
}
