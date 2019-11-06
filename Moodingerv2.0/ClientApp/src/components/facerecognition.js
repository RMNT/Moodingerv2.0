import React, { Component } from 'react';
import Brand from './Brand';
import '../styles.css';

export default class FaceRecognition extends Component {
    render() {
        return (
            <div id="facerec">
                <Brand />
                <h2>Face Recognition</h2>
            </div>
        )
    }
}