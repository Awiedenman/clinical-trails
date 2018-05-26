import React, { Component } from 'react';
import './App.css';
import { searchDataCall } from '../../apiCalls/apiCalls';
import { connect } from 'react-redux';
import { populateSearchData } from '../../actions/index';
import { searchDataCleaner } from '../../cleaner/cleaner';

//react-navigation

class App extends Component {  

  async componentDidMount (){
    const searchData = await searchDataCall('breast cancer');
    const cleanSearchData = searchDataCleaner(searchData.items);
    // console.log(cleanData)
    // console.log(searchDataCleaner)
    this.props.populateSearchData(cleanSearchData)
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
    populateSearchData: (cleanSearchData) => dispatch(populateSearchData(cleanSearchData))
  }
}

export default connect( null, mapDispatchToProps)(App);
