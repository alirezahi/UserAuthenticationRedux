import React, { Component } from 'react';

class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    render(){
        console.log(this.state);
        return(
            <div className="form-inline">
                <h2></h2>
                <div>
                    <input 
                    className="form-control"
                    type="text"
                    placeholder="Username"
                    onChange={event => this.setState({email:event.target.value})}
                    />
                    <input 
                    className="form-control"
                    type="password"
                    placeholder="password"
                    onChange={event => this.setState({password:event.target.value})}
                    />
                    <button
                    className="btn btn-success" type="button">Sign Up
                    </button>
                </div>
                
            </div>
        )
    }
}

export default Signup;