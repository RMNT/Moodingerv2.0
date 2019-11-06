import React, { Component } from 'react';
import Brand from './Brand';
import '../styles.css';



export default class Login extends Component {
    routeChange() {
        let path = `register`;
        this.props.history.push(path);
    }


    state = {
        username: "",
        password: ""
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    onSubmit = async () => {
        const response = await this.props.mutate({
            variables: this.state
        })
        console.log(response);
    }

    render() {
        return (
            <div>
                <div id="loginForm">
                    <Brand />
                    <input
                        name="username"
                        type="text"
                        placeholder="username"
                        onChange={e => this.onChange(e)}
                        value={this.state.username}
                    />
                    <br />
                    <input
                        name="password"
                        type="password"
                        placeholder="password"
                        onChange={e => this.onChange(e)}
                        value={this.state.password}
                    />
                    <br />
                    <div id="afterInput">
                        <button
                            className="navButton"
                            href="#"
                            iclass="loginButton"
                        > Login </button>
                        <a
                            href="/register"
                            id="signUp">Sign up</a>
                    </div>
                </div>
            </div>
        )
    }
}