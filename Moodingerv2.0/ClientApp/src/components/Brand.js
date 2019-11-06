import React, { Component } from 'react';
import '../styles.css';

let brand = "Moodinger"

export default class Element extends Component {
    render() {
        return (
            <h2 id="brand">{brand}</h2>
        )
    }
}