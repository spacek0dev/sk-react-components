import React from 'react'
import styles from './styles.module.css'

export const SKCard = (props) => {
  return <div className={`${styles.skcard} ${props.className ?? ''}`} style={{...props.styles}}>{props.children}</div>
}
SKCard.displayName = "SKCard";
