import React from 'react';
import { connect } from 'react-redux';
// import { Card } from '../../Components/Card';

const CardContainer =( props ) => {


  return(
    <div></div>
  )
}

const mapStateToProps =(state) => {
  return { searchData: state.searchData }
}

export default connect(mapStateToProps)(CardContainer)