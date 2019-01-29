import React, {Component} from 'react';
import '../App.css';
import {NavLink, Route} from 'react-router-dom';
import {withRouter} from 'react-router';
import Register from './register';
import Jokes from './jokes';
import Login from './login';
import Home from './home';
import { Nav } from './styledComponents';

class NavBar extends Component {
    render(){
        return(
            <header className="App-header">
                <Nav>
                    <NavLink exact to='/' className='navlink' activeClassName='current'>Home</NavLink>
                    &nbsp; | &nbsp;
                    <NavLink to='/register' className='navlink' activeClassName='current'>Register</NavLink>
                    &nbsp; | &nbsp;
                    <NavLink to='/login' className='navlink' activeClassName='current'>Login</NavLink>
                    &nbsp; | &nbsp;
                    <NavLink to='/jokes' className='navlink' activeClassName='current'>Jokes</NavLink>
                    &nbsp; | &nbsp;
                    <NavLink to='/' className='navlink' onClick={this.signout}>Logout</NavLink>
                </Nav>

                <Route exact path='/' component={Home} />
                <Route path='/register' render={ props => <Register {...props} /> } />
                <Route path='/login' render={ props => <Login {...props} /> } />
                <Route path='/jokes' render={ props => <Jokes {...props} /> } />
            </header>
        )
    }

    signout = () => {
        localStorage.removeItem('jwt');
        this.props.history.push('/');
    }
}

export default withRouter(NavBar);