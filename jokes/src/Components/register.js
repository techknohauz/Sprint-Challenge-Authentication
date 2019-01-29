import React from 'react';
import '../App.css';
import axios from 'axios';
import { OuterBox, Button } from './styledComponents';

class Register extends React.Component {
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

    register = (e) => {
        e.preventDefault();
        const endpoint = 'http://localhost:3300/api/register';
        const newUser = {
            username: this.state.username,
            password: this.state.password
        };

        axios.post(endpoint, newUser)
            .then(res => {
                this.props.history.push('/login')
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
                <h1>Register for Dad Jokes!</h1>

                <form onSubmit={this.register}>
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
                        <Button type="submit">Submit</Button>
                    </div>
                </form>
            </OuterBox>
        )
    }
}

export default Register;