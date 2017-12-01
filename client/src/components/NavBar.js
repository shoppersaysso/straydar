import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

export default class NavBar extends Component {

    render() {

      return (
        <div>
          <Menu pointing secondary>
            <Menu.Item as={ NavLink } name='home' to='/' />
            <Menu.Item as={ NavLink } name='about' to='/about' />
            <Menu.Item as={ NavLink } name='cats' to='/cats' />
            <Menu.Item as={ NavLink } name='report a stray' to='/cats/new' />
          </Menu>
        </div>
      )
    }
  }
