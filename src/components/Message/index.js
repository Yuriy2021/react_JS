import React from 'react';
import styles from './Message.module.css';

export const Message = (props) => {
    return (<span className={[styles.reset,
    props.color === 'primary' ? styles.primary : '',
    props.color === 'alert' ? styles.alert : ''].join(' ')}> {props.text} </span>)
}