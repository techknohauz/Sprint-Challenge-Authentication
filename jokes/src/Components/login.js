import React from 'react';
import '../App.css';
import axios from 'axios';
import { OuterBox, Button } from './styledComponents';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            error: false
        }
    }

    inputHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    login = (e) => {
        e.preventDefault();
        const endpoint = 'http://localhost:3300/api/login';
        const loginUser = {
            username: this.state.username,
            password: this.state.password
        };

        axios.post(endpoint, loginUser)
            .then(res => {
                localStorage.setItem('jwt', res.data.token);
                this.props.history.push('/jokes')
            })
            .catch(err => {
                this.setState({
                    error: true
                })
            })
    }

    render(){
        return(
            <OuterBox>
                <h1>Login to Dad Jokes!</h1>

                <form onSubmit={this.login}>
                    <div>
                        <input
                            onChange={this.inputHandler}
                            type="text"
                            placeholder="Username"
                            value={this.state.username}
                            name="username"
                        >
                        </input>
                    </div>

                    <div>
                        <input
                            onChange={this.inputHandler}
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            name="password"
                        >
                        </input>
                    </div>

                    <div className="button">
                        <Button type="submit">Login</Button>
                    </div>
                </form>
            </OuterBox>
        )
    }
}

export default Login;