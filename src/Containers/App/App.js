import React, { Component } from 'react';
import './App.css';
import { searchDataCall } from '../../apiCalls/apiCalls';
import { connect } from 'react-redux';
import { populateSearchData } from '../../actions/index';
import { searchDataCleaner } from '../../cleaner/cleaner';
import { SearchForm } from '../../Components/SearchForm/SearchForm';

//react-navigation

class App extends Component {  
  constructor(props){
    super(props);
    this.state = {
      searchCondtion: ''
    }
  }

  async componentDidMount (){
    const searchData = await searchDataCall('breast cancer');
    const cleanSearchData = searchDataCleaner(searchData.items);
    this.props.populateSearchData(cleanSearchData)
  }

  updateSearchCondition = (condition) => {
    this.setState({ searchCondtion: condition.condition })

  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchForm 
            updateSearchCondition={ this.updateSearchCondition }
          />
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
