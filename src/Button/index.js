import React from 'react'
import styles from './styles.module.css'

const styleTypes = {
  text: styles.skbuttonText,
  primary: styles.skbuttonPrimary,
  success: styles.skbuttonSuccess,
  danger: styles.skbuttonDanger
}

export const SKButton = (props) => {
  return (
    <button
      onClick={() => { props?.onClick() }}
      type={props.type ?? 'button'}
      className={`${styles.skbutton} ${styleTypes[props.variant] ?? ''} ${props.className ?? ''}`}
      style={props.styles} >
      {props.text ?? 'Send'}
    </button >
  )
};
SKButton.displayName = "SKButton";