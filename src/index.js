import React from 'react'
import { SKButton } from './Button'
import { SKCard } from './Card'
import styles from './styles.module.css'

const getChildrenOnDisplayName = (children, displayName) => {
  React.Children.map(children, (child) => {
    child.type.displayName === displayName ? child : null
  })
}

const SK = () => {
  const skcard = getChildrenOnDisplayName(children, 'SKCard');
  const skbutton = getChildrenOnDisplayName(children, 'SKButton');
  return (
    <>
      {skcard}
      {skbutton}
    </>
  )
}
SK.SKCard = SKCard;
SK.SKButton = SKButton;

export default SK;