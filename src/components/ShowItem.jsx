import React from 'react';
import Button from './Button'

const ShowItem = props => {
  return (
    <div>
      <h2>{props.item.subject}</h2>
      <h3>{props.item.body}</h3>
    </div>
  )
}
export default ShowItem;
