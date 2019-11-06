import React, { Component } from 'react';
import '../styles.css';

export default class Element extends Component {
    render() {
        return (
            <a href={this.props.element.link}>
                <button
                    className="navButton"
                >
                    {this.props.element.title}
                </button>
            </a>
        )
    }
}