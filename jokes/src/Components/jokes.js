import React from 'react';
import '../App.css';
import axios from 'axios';

class Jokes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            jokes: [],
            loading: true,
            loggedIn: false
        }
    }

    componentDidMount = () => {
        const token = localStorage.getItem('jwt');
        const options = {
            headers: {
                Authorization: token,
            }
        }

        axios.get('http://localhost:9500/api/jokes', options)
            .then(response => {
                this.setState({
                    jokes: response.data,
                    loggedIn: true,
                    loading: false
                })
            })
            .catch(err => {
                this.setState({
                    loggedIn: false,
                    loading: false
                })
            })
    }

    content = () => {
        if(this.state.loading){
            return(
                <div>
                    <h3>Loading...</h3>
                </div>
            )
        }
        
        if(this.state.loggedIn){
            return(
                <div>
                    <h1 className='header'>EPIC DAD JOKES</h1>
                    <ul>
                        {this.state.jokes.map(joke => {
                            return(
                            <div key={joke.id} className="joke">
                                <p>{joke.joke}</p>
                            </div> )
                        })}
                    </ul>
                </div>
            )
        } else {
            return(
                <div>
                    <p>You must be logged in to view the epic Dad Jokes!</p>
                </div>
            )
        }

    }

    render(){
        return(
            < this.content />
        )
    }
}

export default Jokes;