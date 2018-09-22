import React, { Component } from 'react';
import EmailList from '../components/EmailList.jsx'
import ShowItem from '../components/ShowItem'
import {get} from '../apiHelpers'

class DashboardContainer extends Component {
  state ={items: [], current_item: null}

  componentDidMount() {
    get("mails/inbox", "", { Authorization: this.props.token })
      .then(jsonResponse => {
        this.setState({ items: jsonResponse.data });
      })
      .catch(errorResponse => {
        console.log("error", errorResponse);
      });
  }

  onSelect = (id) => {
    console.log(id)
    let item = this.state.items.filter((item) => {
      return item.id == id
    })[0]
    this.setState({
      current_item: item
    })
  }

  render(){
    return (
      <div>
        <h1> Dashboard</h1>
        <EmailList list={this.state.items} handleClick={this.onSelect}/>
        { this.state.current_item && <ShowItem item={this.state.current_item} /> }
      </div>
    )
  }
}

export default DashboardContainer;
