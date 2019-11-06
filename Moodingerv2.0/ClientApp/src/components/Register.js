import React, { Component } from 'react'
import Brand from './Brand'
import '../styles.css';

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            surname: "",
            email: "",
            password: "",
            password_confirmation: "",
            registrationErrors: ""
        }
    }

    render() {
        return (
            <div>
                <div id="loginForm">
                    <Brand />
                    <input
                        type="string"
                        placeholder="Name" /><br />
                    <input
                        type="string"
                        placeholder="Surname" /><br />
                    <input
                        type="string"
                        placeholder="Username" /><br />
                    <input
                        type="number"
                        placeholder="Employee number" /><br />
                    <input
                        type="string"
                        placeholder="Email" /><br />
                    <input
                        type="password"
                        placeholder="Password" /><br />
                    <input
                        type="password"
                        placeholder="Repeat password" /><br />
                    <input
                        type="checkbox" id="visiblePassword" />
                    show password<br />
                    <button class="navButton" iclass="loginButton">Register</button><br />
                    <a href="/">Already have an account?</a>
                </div>
            </div>
        );
    }
}