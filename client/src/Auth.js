import React, { Component } from 'react';

class Auth extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            password: '',
        }
    }
    onChange = (e) => {
        console.log('onChange')
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });

    }
    onSubmit(e) {
        e.preventDefault();
        console.log('onSubmit')
    }
    render() {
        console.log(this.state)
        return(
            <div>
                <h1>Login / Sign up</h1>
                <div className="form-wrap">
                    <form className="login-form" onSubmit={this.onSubmit}>
                        <input type="email" name="email" placeholder="Email" onChange={this.onChange} value={this.state.email}></input>
                        <input type="password" name="password" placeholder="Password" onChange={this.onChange} value={this.state.password}></input>
                        <button>Login</button>
                    </form>
                </div>

                <div className="form-wrap">
                    <form className="login-form" onSubmit={this.onSubmit}>
                        <input type="username" name="username" placeholder="Username" onChange={this.onChange} value={this.state.username}></input>
                        <input type="email" name="email" placeholder="Email" onChange={this.onChange} value={this.state.email}></input>
                        <input type="password" name="password" placeholder="Password" onChange={this.onChange} value={this.state.password}></input>
                        <button>Sign up</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Auth;