import React from 'react';
import Button from './Button'

const ListItem = props => {
  console.log(props)
  return (
    <tr>
      <td>{props.item.subject}</td>
      <td>{props.item.body}</td>
      <td><Button text='View' onClick={props.handleClick}/></td>
    </tr>
  )
}
export default ListItem;
