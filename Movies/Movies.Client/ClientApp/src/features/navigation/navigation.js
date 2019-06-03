
import React from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
    NavbarBrand,
    Nav,
    Collapse,
    NavItem,
    NavLink,
    NavbarToggler } from 'reactstrap';
    
import routesConfig from '../../routes/routes-config';

import './navigation.css';

class Navigation extends React.Component {
    state = { isOpen: false };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
          });
    }

    render() {
        return (
            <Navbar color='dark' dark expand='md'>
                <NavbarBrand href='/'>Flickr Photos</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className='ml-auto' navbar>
                        {/* <NavItem>
                            <NavLink tag={Link} to={routesConfig.photos.path}>Photos</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={routesConfig.users.path}>View Users</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={routesConfig.createUser.path}>Create Users</NavLink>
                        </NavItem>  */}
                        <NavItem>
                            <NavLink tag={Link} to={routesConfig.createMovie.path}>Create Movie</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={routesConfig.movies.path}>Movies</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Navigation;