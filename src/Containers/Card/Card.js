import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Card.css';


export class Card extends Component {
  render(){
    const { 
      public_title,
      target_sample_size,
      gender,
      registration_date,
      // locations

    } = this.props;

    return(
      <div className='card'>
        <a className="save-card">Save Trail Info</a>
        <h3>Trial Title: { public_title }</h3>
        <h3>Target Sample Size: { target_sample_size }</h3>
        <h3>Gender: { gender }</h3>
        <h3>Registation Date:{ registration_date }</h3>
        {/* <h3>Location: { locations }</h3> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { searchData: state.searchData }
}

export default connect(mapStateToProps)(Card)


