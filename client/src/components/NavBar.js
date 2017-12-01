import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

export default class NavBar extends Component {
  state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
      const { activeItem } = this.state

      return (
        <div>
          <Menu pointing secondary>
            <Menu.Item as={ NavLink } name='home' to='/' active={activeItem === 'home'} onClick={this.handleItemClick} />
            <Menu.Item as={ NavLink } name='about' to='/about' active={activeItem === 'about'} onClick={this.handleItemClick} />
            <Menu.Item as={ NavLink } name='cats' to='/cats' active={activeItem === 'cats'} onClick={this.handleItemClick} />
            <Menu.Item as={ NavLink } name='report a stray' to='/cats/new' active={activeItem === 'report a stray'} onClick={this.handleItemClick} />
          </Menu>
        </div>
      )
    }
  }
