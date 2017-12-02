import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
      const { activeItem } = this.state

      return (
        <div>
          <Menu pointing secondary>
            <Menu.Item as={Link} to='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
            <Menu.Item as={Link} to='/about' name='about' active={activeItem === 'about'} onClick={this.handleItemClick} />
            <Menu.Item as={Link} to='/cats' name='cats' active={activeItem === 'cats'} onClick={this.handleItemClick} />
            <Menu.Item as={Link} to='/cats/new' name='report a stray' active={activeItem === 'report a stray'} onClick={this.handleItemClick} />
          </Menu>
          {this.props.children}
        </div>
      )
    }
  }
