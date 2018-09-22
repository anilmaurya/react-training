import React, { Component } from 'react';
import EmailList from '../components/EmailList.jsx'

class DashboardContainer extends Component {
  state ={items: [
    {subject: 'First Email', body: 'this is first email body'},
    {subject: 'Second Email', body: 'this is second email body'}
    ]
  }

  render(){
    return (
      <div>
        <h1> Dashboard</h1>
        <EmailList list={this.state.items}/>
      </div>
    )
  }
}

export default DashboardContainer;
