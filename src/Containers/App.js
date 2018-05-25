import React, { Component } from 'react';
import './App.css';
import { searchDataCall } from '../apiCalls/apiCalls';
import 

class App extends Component {  

  componentDidMount(){
    searchDataCall('breast cancer')
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

export default App;
