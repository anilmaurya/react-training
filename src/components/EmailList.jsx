import React from 'react';
import ListItem from './ListItem'

const EmailList = props => {
  const list = () => {
    return props.list.map((item) => {
      return <ListItem item={item} key={item.id} handleClick={() => {props.handleClick(item.id)}}/>
      }
    )
  }

  return (
    <table className='table'>
      <thead>
        <tr>
          <th> Subject </th>
          <th> Body </th>
          <th> Action </th>
        </tr>
      </thead>
      <tbody>
        {list()}
      </tbody>
    </table>
  )
}
export default EmailList;
