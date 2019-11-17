import React, { Component } from 'react';
import Element from './Element';
import '../styles.css'

export default class Navbar extends Component {
    render() {
        return (
            <div id="nav">
                {this.props.elements.map((element) => {
                    return <Element element={element}/>
                })}
            </div>
        );
    }
}