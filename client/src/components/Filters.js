import React from 'react';

class Filters extends React.Component {

  handleFilterTypeChange = event => this.props.onChangeType(event.target.value);

  render() {
    return (
      <div className="ui form">
        <h3>All Reported Cats</h3>
        <h4>Enter criteria to filter:</h4>
        <div className="field">
          <select name="type" id="type"
          value={this.props.filters.type}
          onChange={this.handleFilterTypeChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Filters;
