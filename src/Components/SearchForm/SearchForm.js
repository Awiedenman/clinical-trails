import React, {
  Component
} from 'react';

export class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: '',
      location: ''
    }
  }

    handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value })
    }

    passSearchCondition = (e) => {
      e.preventDefault();
      this.props.updateSearchCondition(this.state)
    }

    render(){
      return(
        <div>
          <input 
            onChange={ this.handleChange } 
            placeholder='Condtion' 
            name='condition' 
            value={this.state.condtion} 
            required 
          />
          <input 
            onChange={ this.handleChange } 
            placeholder='Location' 
            name='location' 
            value={this.state.location}
          />
          <button 
            onClick={ this.passSearchCondition }> 
            Search
          </button>
        </div>
      )
    }

}