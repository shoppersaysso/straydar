import React, { Component } from 'react';
import { connect } from 'react-redux';
import CatsList from '../components/CatsList';
import Cat from '../components/Cat';

class CatsPage extends Component {

  constructor() {
    super();
    this.state = {
      search: ''
    };
  }

  updateSearch(event) {
    this.setState({search: event.target.value.substr(0,
    20)})
  }

  render() {
    let filteredCats = this.props.cats;
    const { cats } = this.props;
    return (
      <div>
        <br></br>
          <header>
            <h1>Reported Cats</h1>
          </header>
        <ul>
          {filteredCats.map((cat)=> {
            return <CatsShow cat={cat}
              key={cat.id}/>
          })}
        </ul>
        <input type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}/>
    </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    cats: state.cats
  };
}

export default connect(mapStateToProps)(CatsPage);
