import React, { Component } from 'react';
import './App.css';
import { searchDataCall } from '../apiCalls/apiCalls';
// import { dispatch } from 'redux;'
import { populateSearchData } from '../actions/index';

class App extends Component {  
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const searchData = searchDataCall('breast cancer');
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

export default App;
