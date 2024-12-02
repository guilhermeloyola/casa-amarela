import React from 'react';
import styles from './SpeechBalloon.module.css';
import LogoLabelRed from '../../Assets/logo_label_red_sm.svg?react';
import LogoLabelRedAccent from '../../Assets/logo_label_red_accent.svg?react';

const SpeechBalloon = (props) => {
  return (
    <div className={`${styles.speechBalloon} ${styles[props.state]}`} onClick={props.onClick}
    onMouseEnter={props.onMouseEnter} 
    onMouseLeave={props.onMouseLeave}>
      {props.state == 'selected' && <LogoLabelRedAccent />}
      {props.state == 'unselected' && <LogoLabelRed />}
      {props.label}
    </div>
  );
};

export default SpeechBalloon;
