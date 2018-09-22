import React, { Component } from 'react';
import EmailList from '../components/EmailList.jsx'
import ShowItem from '../components/ShowItem'
import NewEmail from '../components/NewEmail'
import {get} from '../apiHelpers'
import {connect} from 'react-redux'
import {fetchEmails} from '../actionCreators/emailActionCreators'

class DashboardContainer extends Component {
  state ={items: [], current_item: null, compose_email: false}

  componentDidMount() {
    this.props.fetchEmails()
  }

  onSelect = (id) => {
    let item = this.props.emailList.filter((item) => {
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
        <EmailList list={this.props.emailList} handleClick={this.onSelect}/>
        { this.state.current_item && <ShowItem item={this.state.current_item} /> }
        { this.state.compose_email && <NewEmail/> }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state.emailReducer
}

export default connect(mapStateToProps, {fetchEmails: fetchEmails})(DashboardContainer)
