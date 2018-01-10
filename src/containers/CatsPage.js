import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';
import Cat from '../components/Cat';

class CatsPage extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }

  updateSearch(event) {
    this.setState({search: event.target.value})
  }

  render() {
    let filteredCats = this.props.cats.filter((cat) => {
      return cat.color.toLowerCase().indexOf(this.state.search) !== -1;
      }
    );
    return (
      <div>
        <br></br>
          <header>
            <h1>Reported Cats</h1>
            <em>Type the color of the cat to filter:   </em>
            <input type="text"
              value={this.state.search}
              placeholder=" color "
              onChange={this.updateSearch.bind(this)}/>
          </header>
          <br></br>
        <ul>
          {filteredCats.reverse()/map((cat)=> {
            return <Segment key={cat.id} >
              <Cat cat={cat}/>
            </Segment>
          })}
        </ul>

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
