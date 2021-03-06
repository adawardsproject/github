import React, { Component } from 'react';
import { Navbar, NavItem, Nav, MenuItem, NavDropdown, Table } from 'react-bootstrap';

import Profile from './Profile';
import Slider from './Slider';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'profile'
    }
  }
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">My github profile</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={1} href="#" onClick={() => this.setState({ currentTab: 'slider' })}>
              Slider
    </NavItem>
            <NavItem eventKey={2} href="#" onClick={() => this.setState({ currentTab: 'profile' })} >
              Profile
    </NavItem>

          </Nav>
        </Navbar>
        <div>
          {this.state.currentTab === "slider" ? <Slider /> : false}
          {this.state.currentTab === "profile" ? <Profile /> : false}
        </div>
      </div>
    );
  }
}

export default App;
