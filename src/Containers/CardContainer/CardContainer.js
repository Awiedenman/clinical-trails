import React from 'react';
import { connect } from 'react-redux';
import { Card } from '../../Containers/Card/Card';
import './CardContainer.css';

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
    <main>{ createCards }</main>
  )
}

export const mapStateToProps =(state) => {
  return { searchData: state.searchData }
}

export default connect(mapStateToProps)(CardContainer)