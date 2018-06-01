import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Card.css';


export class Card extends Component {
  render(){
    const { 
      conditions,
      public_title,
      brief_summary,
      interventions,
      // max_age_range,
      age_range,
      gender,
      target_sample_size,
      registration_date,
      completion_date,
      status,
      recruitment_status,
      locations,
      persons,
      organisations,
      source_name,
      source_info
    } = this.props;

    return(
      <div className='card'>
        <a className="save-card">Save Trail Info</a>
        <h2>{ conditions.name }</h2>
        <h3>Trial Title: { public_title }</h3>
        <h3>Brief Summary: { brief_summary }</h3>
        <h3>Interventions: { interventions.name }</h3> 
        {/* <h3>Age Range: 
            max:{ age_range.max_age }
            min:{ age_range.min_age }</h3> */}
        <h3>Target Sample Size: { target_sample_size }</h3>
        <h3>Gender: { gender }</h3>
        <h3>Registation Date:{ registration_date }</h3>
        <h3>Location: { locations.name }</h3>
        <h3>Administrator's name: { persons.name }</h3>
        <h3>Administrator's role: { persons.role }</h3>
        <h3>organisation's name: { organisations.name }</h3> 
        <h3>organisation's role: { organisations.role }</h3>
        <h3>Source name: { organisations.name }</h3> 
        <h3>Source url:<a href ={ source_info.source_url }>{ source_info.source_url }</a></h3>
        <h3>Terms and Conditions: { source_info.terms_and_conditions }</h3>


        {/* <h3></h3> */}
        <button>▽</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { searchData: state.searchData }
}

export default connect(mapStateToProps)(Card)


