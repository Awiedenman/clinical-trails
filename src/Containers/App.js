import React, { Component } from 'react';
import './App.css';
import { searchDataCall } from '../apiCalls/apiCalls';
import { connect } from 'react-redux';
import { populateSearchData } from '../actions/index';

class App extends Component {  

  async componentDidMount (){
    const searchData = await searchDataCall('breast cancer');
    console.log(searchData)
    //clean data
    this.props.populateSearchData(searchData)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    populateSearchData: (searchData) => dispatch(populateSearchData(searchData))
  }
}

export default connect( null, mapDispatchToProps)(App);
