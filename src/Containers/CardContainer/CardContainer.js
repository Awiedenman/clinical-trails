import React from 'react';
import { connect } from 'react-redux';
import { Card } from '../../Containers/Card/Card';

const CardContainer =({ searchData }) => {
  const createCards = searchData.map(( trial,index) => {
    return (
      <Card 
      { ...trial }
      key={index}
      />
    )
  })

  return(
    <div>{ createCards }</div>
  )
}

const mapStateToProps =(state) => {
  return { searchData: state.searchData }
}

export default connect(mapStateToProps)(CardContainer)